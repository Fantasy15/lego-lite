/**
 * @file 全局公共组件
 */

import 'animate.css';
import loading from './loading/index.vue';
import backTop from './back-top/index.vue';
import tooltip from './tooltip/index.vue';
import notification from './notification';

const components = {
    loading,
    backTop,
    tooltip
}

export default function(Vue) {
    for (let key in components) {
        Vue.component(`${key}`, components[key]);
    }

    (Vue.prototype).$notification = notification;
}
