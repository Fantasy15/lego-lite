<template>
    <div class="app-notice app-notice-closable">
        <div class="app-notice-content">
            <div class>
                <div class="app-notice-message">{{notice.message}}</div>
                <div class="app-notice-description">{{notice.description}}</div>
            </div>
        </div>
        <div class="app-notice-close" @click="remove(notice.key)">
            <span class="app-close-x">
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