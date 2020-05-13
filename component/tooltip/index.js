/**
 * @file index.js
 * @description tooltip 组件入口
 */

import Tooltip from './tooptip';

Tooltip.install = function(Vue) {
    Vue.component(Tooltip.name, Tooltip);
}

export default Tooltip;
