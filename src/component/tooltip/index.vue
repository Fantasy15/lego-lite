<template>
    <div class="tooltip-container">
        <div class="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">{{title}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'popup',
    props: {
        title: String
    },
    created() {
        console.log(this.$props);
    },
    methods: {
    },
}
</script>
<style lang="less">
@import './index.less';
</style>