<template>
    <div class="tooltip-container" v-show="visiable">
        <div class="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">{{title}}</div>
        </div>
    </div>
</template>
<script>
import {alignElement} from 'dom-align';

export default {
    name: 'popup',
    props: {
        title: String
    },
    data() {
        return {
            visiable: false
        }
    }
}
</script>
<style lang="less">
@import './index.less';
</style>