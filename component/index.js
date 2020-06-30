/**
 * @file 全局公共组件
 */

import 'animate.css';
import './style';

import Layout from './layout';
import BackTop from './back-top';
import Button from './button';
import Tooltip from './tooltip';
import notification from './notification';

export {
    BackTop,
    Button,
    Tooltip
}

const components = [
    Layout,
    BackTop,
    Button,
    Tooltip
];

export default function(Vue) {
    components.map(component => {
        Vue.use(component);
    })
    Vue.prototype.$notification = notification;
}
