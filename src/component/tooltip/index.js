/**
 * @file index.js
 * @description tooltip组件入口
 */
import Vue from 'vue';
import Popup from './index.vue'
import Test from './test';
import { alignElement } from 'dom-align';

export default {
    name: 'tooltip',
    props: {
        title: String
    },
    data() {
        return {
            visiable: false,    
        }
    },
    mounted() {
        this.renderContainer();
    },
    methods: {
        onClick() {
            console.log('click');
        },
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
                props: {
                    ...this.$props,
                    visiable: this.visiable
                },
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
        // return h(this.$slots.default[0], context);
        return (
            <Test
                onClick={this.onClick}>
                {this.$slots.default}
            </Test>
        )
    },
}