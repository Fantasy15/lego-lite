/**
 * @file index.js
 * @description this.$notification();
 */

import Vue from 'vue';
import Notice from './index.vue';

function open(options) {
    let $div = document.createElement('div');
    document.body.appendChild($div);

    let context = {props: options};

    new Vue({
        el: $div,
        render() {
            return <Notice {...context}></Notice>;
        }
    })

}

export default {
    open
}