/**
 * @file index.js
 * @description tooltip组件入口
 */
import Vue from 'vue';
import Popup from './index.vue'
import { alignElement } from 'dom-align';

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
                props: this.$props,
                ref: 'popupInstance'
            }

            let self = this;

            new Vue({
                el: $div,
                mounted() {
                    this.$nextTick(() => {
                        let source = this.$refs.popupInstance.$el;
                        let target = self.$el;
                        let config = {
                            offset: [0, -4],
                            points: ['bc', 'tc'],
                            overflow: {adjustX: true, adjustY: true},
                        }
                        let result = alignElement(source, target, config);
                    })
                },
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