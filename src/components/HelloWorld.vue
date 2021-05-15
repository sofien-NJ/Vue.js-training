<template>
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
</style>
