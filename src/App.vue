<template>
    <div id="app">
        <app-header />
        <p>
            {{ formattedDate }}
        </p>
        <button @click="incrementMonth">INCREMENT MONTH</button>
        <router-view />
        <v-footer>
            <app-footer />
        </v-footer>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppHeader from "@/components/global/Appheader.vue";
import AppFooter from "@/components/global/Appfooter.vue";

export default {
    name: "App",
    components: {
        AppHeader,
        AppFooter,
    },

    computed: {
        ...mapGetters(["formattedDate"]),
    },
    methods: {
        ...mapActions(["incrementMonth"]),
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
