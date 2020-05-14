<template>
    <div class="le-notice le-notice-closable">
        <div class="le-notice-content">
            <div class>
                <div class="le-notice-message">{{notice.message}}</div>
                <div class="le-notice-description">{{notice.description}}</div>
            </div>
        </div>
        <div class="le-notice-close" @click="remove(notice.key)">
            <span class="le-close-x">
                <i
                    aria-label="icon: close"
                    class="anticon anticon-close app-close-icon">
                </i>
                close
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'notice',
    props: {
        notice: {
            type: Object,
            default: () => {
                return {
                    key: '',
                    type: '',
                    duration: 4.5,
                    message: '',
                    description: '',
                    onclick: function() {}
                }
            }
        },
        remove: Function
    },
    mounted() {
    },
}
</script>