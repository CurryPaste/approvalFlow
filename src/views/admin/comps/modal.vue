<template>
    <div class="modal">
        <span> this has some asdfasdfadfasd</span>
        <p @click="handleClick">点击打印</p>
        <span>{{text}}</span>
    </div>
</template>

<script>
export default {
    props: ['text'],
    methods: {
        handleClick() {
            console.log("handleClick")
        }
    }
}
</script>