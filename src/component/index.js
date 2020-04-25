/**
 * @file 全局公共组件
 */

import 'animate.css';
import loading from './loading/index.vue';
import backTop from './back-top/index.vue';
import notification from './notification';

const components = {
    loading,
    backTop
}

export default function(Vue) {
    for (let key in components) {
        Vue.component(`l-${key}`, components[key]);
    }

    (Vue.prototype).$notification = notification;
}
