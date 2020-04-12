/**
 * @file vue 组件注册入口
 */

import component from './component';

export default function(Vue) {
    // 注册全局组件
    for (let key in component) {
        Vue.component(`${key}`, component[key]);
    }
}