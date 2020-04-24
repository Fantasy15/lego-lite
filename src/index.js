/**
 * @file index.js
 * @description 入口文件
 */

import Vue from 'vue';
import App from './app.vue';
import router from './route';

import plugin from './component';

Vue.use(plugin)


new Vue({
    router,
    render: h => h(App)
}).$mount('#app');