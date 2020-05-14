<template>
    <div>
        <l-tooltip :title="'这是一段文章标题描述'">
            <span class="text">这是一个文章标题</span>
        </l-tooltip>
        <l-tooltip :title="'这是一段文章标题描述'">
            <span class="text">这是一个文章标题</span>
        </l-tooltip>
    </div>
</template>
<<script>
export default {
    name: 'demo',
    mounted() {

    }
}
</script>
<style lang="less" scoped>
div {
    margin-top: 100px;
}
.text {
    margin-left: 100px;
}
</style>