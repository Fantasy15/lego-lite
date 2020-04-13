<template>
    <transition 
        name="fade"
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        >
        <div
            v-if="visible"
            class="app-back-top"
            @click="scrollToTop">
            <slot>
                <div class="app-back-top-content">UP</div>
            </slot>
        </div>
    </transition>
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
        this.transitionProps = {
            props: {
                appear: true,
                css: false,
            }
        }
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
            this.handleScroll();
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
        scrollToTop() {
            this.scrollTarget.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    },
}
</script>

<style lang="less">
@import './index.less';
</style>