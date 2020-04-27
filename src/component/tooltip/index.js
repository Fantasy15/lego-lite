/**
 * @file index.js
 * @description tooltip组件入口
 */
import Vue from 'vue';
import Popup from './index.vue';

import ContainerRender from '../_util/containerRender';

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
            if (!this._component) {
                let $div = document.createElement('div');
                this.componentEl = $div;
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

                this._component = new Vue({
                    el: $div,
                    mounted() {
                        this.$nextTick(() => {
                            self.popupInstance = this.$refs.popupInstance;
                        })
                    },
                    methods: {
                        forceRender() {

                        }
                    },
                    render() {
                        return <Popup {...context} />
                    }
                })
            } else {
                this._component.forceRender();
            }
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
        this.$slots.default[0].data.on = context.on;
        return this.$slots.default;

        // return <ContainerRender>
        //         ${this.$slots.default}
        //         </ContainerRender>
    },
}