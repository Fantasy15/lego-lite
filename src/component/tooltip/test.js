export default {
    mounted() {
        console.log(this);
    },
    render() {
        return this.$slots.default;
    }
}