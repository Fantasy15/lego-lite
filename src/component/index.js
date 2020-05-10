/**
 * @file 全局公共组件
 */

import 'animate.css';
import BackTop from './back-top';
import Tooltip from './tooltip';
import notification from './notification';

export {
    BackTop,
    Tooltip
}

const components = [
    BackTop,
    Tooltip
];

export default function(Vue) {
    components.map(component => {
        Vue.use(component);
    })
    Vue.prototype.$notification = notification;
}
