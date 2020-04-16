<template>
    <div @click="notice">click</div>
</template>

<script>
export default {
    name: 'demo',
    methods: {
        notice() {
            this.$notification.open({
                duration: 10,
                message: 'Notification Title',
                description:
                    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        }
    }
}
</script>