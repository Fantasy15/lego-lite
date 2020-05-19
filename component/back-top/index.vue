<template>
    <transition
        name="fade"
        appear
        enter-active-class="animated fadeIn faster"
        leave-active-class="animated fadeOut faster">
        <div
            v-if="visible"
            class="le-back-top"
            v-on="$listeners"
            @click="scrollToTop">
            <slot>
                <div class="le-back-top-content">UP</div>
            </slot>
        </div>
    </transition>
</template>

<script>
import getScroll from '../_util/getScroll';
import scrollTo from '../_util/scrollTo';
const addEventListener = require('add-dom-event-listener');

export default {
    name: 'l-back-top',
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
            scrollTo(0, {
                el: this.scrollTarget,
            });
        }
    },
}
</script>