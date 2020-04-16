/**
 * @file vue 组件注册入口
 */

import installComponents from './component';

export default function(Vue) {
    // 注册全局组件
    installComponents(Vue);
}