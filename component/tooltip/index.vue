<template>
    <div
        v-show="visiable"
        class="le-tooltip-container"
        @mouseenter="onMouseenter"
        @mouseleave="onMouseleave">
        <div class="le-tooltip-inner">{{title }}</div>
    </div>
</template>

<script>
import { alignElement } from 'dom-align';

export default {
    name: 'popup',
    props: {
        title: String,
        getTarget: Function,
    },
    data() {
        this.initAlign = false;
        return {
            visiable: false,
        }
    },
    watch: {
        visiable(val) {
            if (val && !this.initAlign) {
                this.$nextTick(() => {
                    this.alignPopup();
                })
            }
        }
    },
    methods: {
        alignPopup() {
            let source = this.$el;
            let target = this.getTarget();
            let config = {
                ignoreShake: true,
                offset: [0, 0],
                points: ['tc', 'bc'],
                overflow: {adjustX: true, adjustY: true},
                targetOffset: [0, 0],
            }
            alignElement(source, target, config);
            this.initAlign = true;
        },
        onMouseenter() {
            this.visiable = true;
        },
        onMouseleave() {
            this.visiable = false;
        }
    },
}
</script>