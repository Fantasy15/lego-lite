/**
 * @file configProvider.js
 * @description 全局注入的一些函数
 */

 export const configConsumerProps = {
    getPrefixCls: (suffixCls, customizePrefixCls) => {
        if (customizePrefixCls) {
            return customizePrefixCls
        };
        return `le-${suffixCls}`;
    },
    // renderEmpty: defaultRenderEmpty,
 }