<template>
    <a v-bind:href="href" v-bind:target="target" v-bind:class="classes">{{ title }}</a>
</template>

<script>
export default {
    name: 'Anchor',
    props: [
        'href',
        'target',
        'classes',
        'title'
    ]
}
</script>

<style lang="scss" scoped>

</style>
