<template>
    <a v-bind:href="href" v-bind:target="target" v-bind:class="classes"></a>
</template>

<script>
export default {
    name: 'Anchor',
    props: [
        'href',
        'target',
        'classes'
    ]
}
</script>

<style lang="scss" scoped>

.email, .social {
    position: relative;
    bottom: 0px;
    font-size: 3.5em;
    padding: 5px 15px;
    margin: 10px 10px;
    color: white;
    text-decoration: none;
    transition: 0.3s ease;
}

</style>
