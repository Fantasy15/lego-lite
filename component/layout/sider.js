import {
    getOptionProps,
    hasProp,
    getComponentFromProp,
    getListeners,
} from '../_util/propsUtil';
import BaseMixin from '../_util/BaseMixin';
import { configConsumerProps } from '../_util/configProvider';

const dimensionMaxMap = {
    xs: '479.98px',
    sm: '575.98px',
    md: '767.98px',
    lg: '991.98px',
    xl: '1199.98px',
    xxl: '1599.98px',
};

const generateId = (() => {
    let i = 0;
    return (prefix = '') => {
        i += 1;
        return `${prefix}${i}`;
    };
})();

export default {
    name: 'ALayoutSider',
    __ANT_LAYOUT_SIDER: true,
    mixins: [BaseMixin],
    model: {
        prop: 'collapsed',
        event: 'collapse',
    },
    props: {
        prefixCls: String,
        collapsible: {
            type: Boolean,
            default: false
        },
        collapsed: Boolean,
        defaultCollapsed: {
            type: Boolean,
            default: false,
        },
        reverseArrow: {
            type: Boolean,
            default: false,
        },
        zeroWidthTriggerStyle: Object,
        trigger,
        width: {
            type: Number,
            default: 200
        },
        collapsedWidth: {
            type: Number,
            default: 80
        },
        breakpoint: String,
        theme: {
            type: String,
            default: 'dark'        
        },
    },
    data() {
        this.uniqueId = generateId('ant-sider-');
        let matchMedia;
        if (typeof window !== 'undefined') {
            matchMedia = window.matchMedia;
        }
        const props = getOptionProps(this);
        if (matchMedia && props.breakpoint && props.breakpoint in dimensionMaxMap) {
            this.mql = matchMedia(`(max-width: ${dimensionMaxMap[props.breakpoint]})`);
        }
        let sCollapsed;
        if ('collapsed' in props) {
            sCollapsed = props.collapsed;
        } else {
            sCollapsed = props.defaultCollapsed;
        }
        return {
            sCollapsed,
            below: false,
            belowShow: false,
        };
    },
    provide() {
        return {
            layoutSiderContext: this, // menu组件中使用
        };
    },
    inject: {
        siderHook: { default: () => ({}) },
        configProvider: { default: () => configConsumerProps },
    },
    watch: {
        collapsed(val) {
            this.setState({
                sCollapsed: val,
            });
        },
    },

    mounted() {
        this.$nextTick(() => {
            if (this.mql) {
                this.mql.addListener(this.responsiveHandler);
                this.responsiveHandler(this.mql);
            }

            if (this.siderHook.addSider) {
                this.siderHook.addSider(this.uniqueId);
            }
        });
    },

    beforeDestroy() {
        if (this.mql) {
            this.mql.removeListener(this.responsiveHandler);
        }

        if (this.siderHook.removeSider) {
            this.siderHook.removeSider(this.uniqueId);
        }
    },
    methods: {
        responsiveHandler(mql) {
            this.setState({ below: mql.matches });
            this.$emit('breakpoint', mql.matches);
            if (this.sCollapsed !== mql.matches) {
                this.setCollapsed(mql.matches, 'responsive');
            }
        },

        setCollapsed(collapsed, type) {
            if (!hasProp(this, 'collapsed')) {
                this.setState({
                    sCollapsed: collapsed,
                });
            }
            this.$emit('collapse', collapsed, type);
        },

        toggle() {
            const collapsed = !this.sCollapsed;
            this.setCollapsed(collapsed, 'clickTrigger');
        },

        belowShowChange() {
            this.setState({ belowShow: !this.belowShow });
        },
    },

    render() {
        const {
            prefixCls: customizePrefixCls,
            theme,
            collapsible,
            reverseArrow,
            width,
            collapsedWidth,
            zeroWidthTriggerStyle,
        } = getOptionProps(this);
        const getPrefixCls = this.configProvider.getPrefixCls;
        const prefixCls = getPrefixCls('layout-sider', customizePrefixCls);

        const trigger = getComponentFromProp(this, 'trigger');
        const siderWidth = `${this.sCollapsed ? collapsedWidth : width}px`;
        // special trigger when collapsedWidth == 0
        const zeroWidthTrigger =
            parseFloat(String(collapsedWidth || 0)) === 0 ? (
                <span
                    onClick={this.toggle}
                    class={`${prefixCls}-zero-width-trigger ${prefixCls}-zero-width-trigger-${
                        reverseArrow ? 'right' : 'left'
                        }`}
                    style={zeroWidthTriggerStyle}>
                    bars
                </span>
            ) : null;
        const iconObj = {
            expanded: reverseArrow ? 'right' : 'left',
            collapsed: reverseArrow ? 'left' : 'right',
        };
        const status = this.sCollapsed ? 'collapsed' : 'expanded';
        const defaultTrigger = iconObj[status];
        const triggerDom =
            trigger !== null
                ? zeroWidthTrigger || (
                    <div class={`${prefixCls}-trigger`} onClick={this.toggle} style={{ width: siderWidth }}>
                        {trigger || defaultTrigger}
                    </div>
                )
                : null;
        const divStyle = {
            // ...style,
            flex: `0 0 ${siderWidth}`,
            maxWidth: siderWidth, // Fix width transition bug in IE11
            minWidth: siderWidth, // https://github.com/ant-design/ant-design/issues/6349
            width: siderWidth,
        };
        const classes = {
            prefixCls: true, 
            [`${prefixCls}-${theme}`]: true, 
            [`${prefixCls}-collapsed`]: !!this.sCollapsed,
            [`${prefixCls}-has-trigger`]: collapsible && trigger !== null && !zeroWidthTrigger,
            [`${prefixCls}-below`]: !!this.below,
            [`${prefixCls}-zero-width`]: parseFloat(siderWidth) === 0,
        };
        const divProps = {
            on: getListeners(this),
            class: classes,
            style: divStyle,
        };
        return (
            <aside {...divProps}>
                <div class={`${prefixCls}-children`}>{this.$slots.default}</div>
                {collapsible || (this.below && zeroWidthTrigger) ? triggerDom : null}
            </aside>
        );
    },
};
