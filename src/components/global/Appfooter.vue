<template>
    <v-card height="400px">
        <v-footer v-bind="localAttrs" :padless="padless">
            <v-card flat tile width="100%" class="red lighten-1 text-center">
                <v-card-text>
                    <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
                        <v-icon size="24px">
                            {{ icon }}
                        </v-icon>
                    </v-btn>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-card-text>
            </v-card>
        </v-footer>

        <v-row align="center" justify="center" class="ma-12">
            <v-col cols="12" md="8">
                <v-select
                    v-model="variant"
                    :items="items"
                    clearable
                    label="Variant"
                ></v-select>

                <v-checkbox
                    v-model="padless"
                    hide-details
                    label="Padless"
                ></v-checkbox>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    name: "footer",
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
