<template>
    <div class="about">
        <h1>Let's go somewhere!</h1>

        <router-link to="/">Home</router-link><br />
        <router-link to="/">Contact</router-link>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            title: "what about us ",
        };
    },
    name: "About",
};
</script>
