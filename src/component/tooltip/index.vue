<script>
export default {
    name: 'tooltip',
    props: {
        title: String
    },
    data() {
        return {
            visiable: false
        }
    },
    mounted() {
        this.renderComponents();
    },
    methods: {
        renderComponents() {

        }
    },
    render() {
        return this.$slots.default;
    },
}
</script>
<style lang="less">
@import './index.less';
</style>