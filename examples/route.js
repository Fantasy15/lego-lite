/**
 * @file route.js
 * @description 路由入口文件
 */

import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)

// 替换成想要测试的组件
import Test from 'Component/button/demo/index.vue';

export default new Router({
    routes: [
        {
            path: '/',
            name: 'test',
            component: Test
        }
    ]
})
