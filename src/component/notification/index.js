/**
 * @file index.js
 * @description 通知组件;
 */

import Vue from 'vue';
import Notification from './index.vue';

const notcieInstance = {};
const defaultPlacement = 'topRight';

function action(options, type) {
    options.placement = options.placement ? options.placement : defaultPlacement;

    if (notcieInstance[options.placement]) {
        let instance = notcieInstance[options.placement];
        switch (type) {
            case 'open':
            case 'success':
            case 'info':
            case 'warn':
            case 'error':
                instance.add(options, type);
                break;
            case 'close':
                instance.remove(options);
            case 'destory':
                instance.destory(options);
            default:
                break;
        }
        return;
    }

    getNotification(options, (intance) => {
        // 首次挂载后缓存该实例
        notcieInstance[options.placement] = intance;
    })
}

function getNotification(options, cb) {
    let $div = document.createElement($div);
    document.body.appendChild($div);

    let context = {
        ref: 'notification',
        props: options
    };

    new Vue({
        el: $div,
        mounted() {
            this.$nextTick(() => {
                this.$refs.notification.add(options);
                cb(this.$refs.notification);
            })
        },
        render() {
            return <Notification {...context}></Notification>;
        }
    })
}


const api = {};

['success', 'info', 'warn', 'error', 'open', 'close', 'destory'].forEach(type => {
    api[type] = function (options) {
        action(options, type);
    };
})


export default api;