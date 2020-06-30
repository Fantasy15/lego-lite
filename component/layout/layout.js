import { getListeners } from '../_util/propsUtil';
import { configConsumerProps } from '../_util/configProvider';

export const BasicProps = {
    prefixCls: String,
    hasSider: Boolean,
    tagName: String,
};

function generator({ suffixCls, tagName, name }) {
    return BasicComponent => {
        return {
            name,
            props: BasicComponent.props,
            inject: {
                configProvider: { default: () => configConsumerProps },
            },
            render() {
                const { prefixCls: customizePrefixCls } = this.$props;
                const getPrefixCls = this.configProvider.getPrefixCls;
                const prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
                const basicComponentProps = {
                    props: {
                        prefixCls,
                        tagName,
                    },
                    on: getListeners(this),
                };
                return <BasicComponent {...basicComponentProps}>{this.$slots.default}</BasicComponent>;
            },
        };
    };
}

const Basic = {
    props: BasicProps,
    render() {
        const { prefixCls, tagName: Tag, $slots } = this;
        const divProps = {
            class: prefixCls,
            on: getListeners(this),
        };
        return <Tag {...divProps}>{$slots.default}</Tag>;
    },
};

const BasicLayout = {
    props: BasicProps,
    data() {
        return {
            siders: [],
        };
    },
    provide() {
        return {
            siderHook: {
                addSider: id => {
                    this.siders = [...this.siders, id];
                },
                removeSider: id => {
                    this.siders = this.siders.filter(currentId => currentId !== id);
                },
            },
        };
    },
    render() {
        const { prefixCls, $slots, hasSider, tagName: Tag } = this;
        const classes = {
            prefixCls: true,
            [`${prefixCls}-has-sider`]: typeof hasSider === 'boolean' ? hasSider : this.siders.length > 0
        }
        
        const divProps = {
            class: classes,
            on: getListeners(this),
        };
        return <Tag {...divProps}>{$slots.default}</Tag>;
    },
};

const Layout = generator({
    suffixCls: 'layout',
    tagName: 'section',
    name: 'LLayout',
})(BasicLayout);

const Header = generator({
    suffixCls: 'layout-header',
    tagName: 'header',
    name: 'LLayoutHeader',
})(Basic);

const Footer = generator({
    suffixCls: 'layout-footer',
    tagName: 'footer',
    name: 'LLayoutFooter',
})(Basic);

const Content = generator({
    suffixCls: 'layout-content',
    tagName: 'main',
    name: 'LLayoutContent',
})(Basic);

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;

export default Layout;
