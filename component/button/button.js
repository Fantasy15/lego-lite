/**
 * @file button.js
 * @description button component
 */

import Wave from '../_util/wave';
import { configConsumerProps } from '../_util/configProvider';

export default {
    name: 'l-button',
    inject: {
        configProvider: {
            default: () => configConsumerProps
        }
    },
    props: {
        type: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: '',
        },
        htmlType: {
            type: String,
            default: 'button'
        }
    },
    computed: {
        classes() {
            const { type, shape, size, ghost, block } = this;
            const getPrefixCls = this.configProvider.getPrefixCls;
            const prefixCls = getPrefixCls('btn');

            let sizeCls = '';
            switch (size) {
                case 'large':
                    sizeCls = 'lg';
                    break;
                case 'small':
                    sizeCls = 'sm';
                    break;
                default:
                    break;
            }

            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-${type}`]: type,
                [`${prefixCls}-${shape}`]: shape,
                [`${prefixCls}-${sizeCls}`]: sizeCls,
                // [`${prefixCls}-icon-only`]: children.length === 0 && iconType,
                // [`${prefixCls}-loading`]: sLoading,
                [`${prefixCls}-background-ghost`]: ghost,
                [`${prefixCls}-block`]: block,
            }
        }
    },
    render() {
        const { type, classes, $slots, htmlType } = this;
        const context = {
            ref: 'buttonNode',
            class: classes
        }

        const buttonNode = (
            <button {...context} type={htmlType}>
                {$slots.default}
            </button>
        )
        

        if (type === 'link') {
            return buttonNode;
        } else {
            return (
                <Wave>
                    {buttonNode}
                </Wave>
            )
        }
    }
}