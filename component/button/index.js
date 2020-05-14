/**
 * @file index.js
 * @description button 组件注册入口
 */

import Button from './button.js';
import ButtonGroup from './button-group.vue';

Button.install = function(Vue) {
    Vue.component(Button.name, Button);
    Vue.component(ButtonGroup.name, ButtonGroup);
}

export default Button;