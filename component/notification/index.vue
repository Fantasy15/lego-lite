<template>
    <div :class="['le-notification', `le-notification-${placement}`]">
        <Notice
            v-for="notice in notices"
            :key="notice.key"
            :notice="notice"
            :remove="remove"
        />
    </div>
</template>

<script>
import Notice from './notice.vue';

let seed = 0;

export default {
    name: "notification",
    components: {Notice},
    props: {
        placement: String
    },
    data() {
        return {
            notices: []
        };
    },
    mounted() {
    },
    beforeDestroy() {},
    methods: {
        add(options, type) {
            const key = `notice_${Date.now()}_${seed++}`;
            this.notices.push({
                key,
                type,
                ...options,
            })
        },
        remove(key) {
            const index = this.notices.findIndex((notice) => {
                return notice.key === key;
            })
            if (index > -1) {
                this.notices.splice(index, 1);
            }
        },
        destory(options) {
            this.notices = [];
        }
    }
};
</script>