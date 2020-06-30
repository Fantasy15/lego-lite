export default {
    methods: {
        setState(state, callback) {
            Object.assign(this.$data, state);
            this.$forceUpdate();
            this.$nextTick(() => {
                callback && callback();
            });
        }
    },
};
