/**
 * @file index.js
 * @description 入口文件
 */

import Vue from 'vue';
import App from './app.vue';
import router from './route';

import component from './component';

Vue.use(component);


new Vue({
    router,
    render: h => h(App)
}).$mount('#app');