<template>
    <button v-bind:class="classes"> {{ title }} </button>
</template>

<script>
export default {
    name: 'Button',
    props: [
        'title',
        'classes'
    ]
}
</script>

<style lang="scss">

</style>