<template>
    <div class="container">
        <div class="header">
            <ul class="text-left">
                <router-link to="/Contact" tag="li" exact>
                    <a>Profile</a>
                </router-link>
                <router-link to="/about" tag="li">
                    <a>Favoris</a>
                </router-link>

                <router-link to="/about" tag="li">
                    <a>Adresse de livraison</a>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Appheader",
};
</script>
<style lang="scss" scoped>
.header {
    background-color: #666;
    color: #555;
    overflow: hidden;
}
.logo {
    font-size: 30px;
    padding: 20px;
    float: left;
    width: 200px;
    color: azure;
}
ul {
    float: center;
    width: calc(100% -200px);
}
li {
    padding: 20px;
    display: inline-block;
    font-size: 18px;
    a {
        color: azure;
        text-decoration: none;
    }
}
</style>
