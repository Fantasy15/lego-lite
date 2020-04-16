<template>
    <div class="l-notice l-notice-closable">
        <div class="l-notice-content">
            <div class>
                <div class="l-notice-message">{{message}}</div>
                <div class="l-notice-description">{{description}}</div>
            </div>
        </div>
        <a tabindex="0" class="l-notice-close">
            <span class="l-close-x">
                <i
                    aria-label="icon: close"
                    class="anticon anticon-close l-close-icon">
                </i>
                close
            </span>
        </a>
    </div>
</template>

<script>
export default {
    name: "notification",
    props: {
        duration: {
            type: Number,
            default: 4.5
        },
        message: String,
        description: String,
        onclick: Function
    },
    data() {
        return {};
    },
    mounted() {
    },
    beforeDestroy() {},
    methods: {}
};
</script>
<style lang="less" scoped>
@import './index.less';
</style>