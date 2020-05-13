/**
 * @file index.js
 * @description back-top 组件入口
 */

import BackTop from './index.vue';

BackTop.install = function(Vue) {
    Vue.component(BackTop.name, BackTop);
}

export default BackTop;