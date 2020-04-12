<template>
    <div
        v-if="visible"
        class="app-back-top"
        @click="scorllTop">
    </div>
</template>

<script>
import getScroll from '../_util/getScroll';
const addEventListener = require('add-dom-event-listener');

export default {
    name: 'back-top',
    props: {
        target: Object,
        visibilityHeight: {
            type: Number,
            default: 400
        }
    },
    data() {
        this.scrollEvent = null;
        return {
            visible: false,
        }
    },
    computed: {
        scrollTarget() {
            return this.target || window;
        }
    },
    mounted() {
        this.$nextTick(() => {
            addEventListener(this.scrollTarget, 'scroll', this.handleScroll);
        })
    },
    beforeDestroy() {
        if (this.scrollEvent) {
            this.scrollEvent.remove();
        }
    },
    methods: {
        handleScroll(e) {
            const {scrollTarget, visibilityHeight} = this;
            const scrollTop = getScroll(scrollTarget, true);
            this.visible = scrollTop > visibilityHeight;
        },
        scrollTop() {

        }
    },
}
</script>

<style>
@import './index.less';
</style>