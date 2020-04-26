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
        onMouseenter() {
            console.log('enter');
        },
        onMouseleave() {
            console.log('leave');
        },
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
                        // 设置tooltip position
                        let source = this.$refs.popupInstance.$el;
                        let target = self.$el;
                        let config = {
                            offset: [0, -4],
                            points: ['bc', 'tc'],
                            overflow: {adjustX: true, adjustY: true},
                        }
                        alignElement(source, target, config);
                    })
                },
                render() {
                    return <Popup {...context} />
                }
            })
        }
    },
    render(h) {
        let context = {
            on: {
                mouseenter: this.onMouseenter,
                mouseleave: this.onMouseleave
            }
        }
        return this.$slots.default;
    },
}