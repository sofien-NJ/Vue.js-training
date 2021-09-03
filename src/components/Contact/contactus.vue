<template>
    <div class="post-box">
        <div class="row">
            <div class="form">
                <label for="name">Nom :</label>
                <input type="text" /><br />
                <label for="name">email:</label>
                <input type="text" /><br />

                <div id="example-3">
                    <button v-on:click="say('what')">Enregistrer</button>
                </div>

                <br />
                <label for="name">Mot de pass :</label>
                <input type="text" /><br />
                <label for="name">Confirmer mot de pass :</label>
                <input type="text" /><br />
                <div id="example-3">
                    <button v-on:click="say('what')">Confirme</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "post",
};
</script>
<style lang="scss" scoped>
.post-box {
    padding: 25px;
    background-color: azure;
    box-shadow: 0 0 10px rgb(167, 164, 164);
    position: relative;
    text-align: left;
    margin-bottom: 20px;
}
.description {
    padding: 25;
    background-color: grey-leight;
}
.form {
    text-align: center;
}
.parag {
    padding: 0 0 10;
    color: coral;
}
</style>
