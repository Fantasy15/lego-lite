<template>
    <tooltip :title="'这是一段文章标题描述'">
        <div class="text">这是一个文章标题</div>
    </tooltip>
</template>
<<script>
export default {
    name: 'demo',
}
</script>
<style lang="less" scoped>
.text {
    margin-left: 100px;
}
</style>