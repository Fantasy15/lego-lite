<template>
    <div class="content">
        <h1>content</h1>
        <l-back-top
            class="haha"
            test='123'
            :visibilityHeight="300"
            @click="show">
            <!-- <div>返回顶部</div> -->
        </l-back-top>
    </div>
</template>

<script>
export default {
    name: 'demo',
    methods: {
        show() {
            console.log(1);
            // alert(1);
        }
    }
}
</script>

<style lang="less">
.content {
    height: 2000px;
}
</style>