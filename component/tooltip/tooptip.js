/**
 * @file index.js
 * @description tooltip组件
 */
import Vue from 'vue';
import Popup from './index.vue';

export default {
    name: 'le-tooltip',
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
        getTarget() {
            return this.$el;
        },
        onMouseenter() {
            this.popupInstance.onMouseenter();
        },
        onMouseleave() {
            this.popupInstance.onMouseleave();
        },
        renderContainer() {
            let $div = document.createElement('div');
            document.body.appendChild($div);

            let context = {
                props: {
                    ...this.$props,
                    visiable: this.visiable,
                    getTarget: this.getTarget,
                },
                ref: 'popupInstance'
            }

            let self = this;

            new Vue({
                el: $div,
                mounted() {
                    this.$nextTick(() => {
                        self.popupInstance = this.$refs.popupInstance;
                    })
                },
                render() {
                    return <Popup {...context} />
                }
            })

        }
    },
    render() {
        let context = {
            on: {
                mouseenter: this.onMouseenter,
                mouseleave: this.onMouseleave
            }
        }
        // 需要主动为 VNODE 添加事件,后续考虑添加 clone 方法
        if (this.$slots.default[0].data) {
            this.$slots.default[0].data.on = context.on;
        } else {
            this.$slots.default[0].data = context;
        }
        return this.$slots.default;
    },
}