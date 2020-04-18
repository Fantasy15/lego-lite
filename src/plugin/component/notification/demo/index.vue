<template>
    <div>
        <div @click="open('topRight')">open</div>
        <div @click="open('topLeft')">topLeft</div>
        <div @click="open('bottomLeft')">bottomLeft</div>
        <div @click="open('bottomRight')">bottomRigth</div>
        <!-- <div @click="destory">destory</div>
        <div @click="success">success</div>
        <div @click="info">info</div>
        <div @click="warn">warn</div>
        <div @click="error">error</div> -->
    </div>
</template>

<script>
export default {
    name: 'demo',
    data() {
        return {
            seed: 0
        }
    },
    methods: {
        open(placement="topRight") {
            this.$notification.open({
                placement: placement,
                duration: 10,
                message: `标题${this.seed++}`,
                description:
                    '这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        },
        success() {
            this.$notification.open({
                duration: 10,
                message: `标题${this.seed++}`,
                description:
                    '这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        },
        info() {
            this.$notification.open({
                duration: 10,
                message: `标题${this.seed++}`,
                description:
                    '这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        },
        warn() {
            this.$notification.open({
                duration: 10,
                message: `标题${this.seed++}`,
                description:
                    '这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        },
        error() {
            this.$notification.open({
                duration: 10,
                message: `标题${this.seed++}`,
                description:
                    `这是一段描述${this.seed++},这是一段描述${this.seed++},这是一段描述${this.seed++},这是一段描述${this.seed++}`,
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        },
        destory() {
            this.$notification.open({
                duration: 10,
                message: `标题${this.seed++}`,
                description:
                    `这是一段描述${this.seed++},这是一段描述${this.seed++},这是一段描述${this.seed++},这是一段描述${this.seed++}`,
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        },
    }
}
</script>