<template>
    <div class="about">
        <h1>{{ pagename }}</h1>
        <p>{{ pagedescription }}</p>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            pagename: "About us",
            pagedescription: "These is the About Page",
        };
    },
    name: "About",
};
</script>
