/**
 * @file index.js
 * @description tooltip组件入口
 */
import Vue from 'vue';
import Popup from './index.vue'

export default {
    name: 'tooltip',
    props: {
        title: String
    },
    mounted() {
        this.renderContainer();
    },
    methods: {
        renderContainer() {
            let $div = document.createElement('div');
            document.body.appendChild($div);

            let context = {
                props: this.$props
            }

            new Vue({
                el: $div,
                render() {
                    return <Popup {...context} />
                }
            })
        }
    },
    render() {
        return this.$slots.default;
    },
}