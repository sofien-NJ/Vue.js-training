<template>
    <div class="container">
        <div class="header">
            <div class="logo">
                <router-link to="/">
                    <a><img src="x.png" alt="" /></a>
                </router-link>
            </div>
            <ul class="text-right">
                <router-link to="/" tag="li" exact>
                    <a>Offre d'emploi</a>
                </router-link>
                <router-link to="/blog" tag="li">
                    <a>Formation</a>
                </router-link>

                <router-link to="/about" tag="li">
                    <a>Espace d'inscription</a>
                </router-link>

                <router-link to="/contact" tag="li">
                    <a>Contact</a>
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
