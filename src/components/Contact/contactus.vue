<template>
    <div class="post-box">
        <div class="row">
            <div class="form">
                <label for="name">First name :</label>
                <input type="text" /><br />
                <label for="name">Last name :</label>
                <input type="text" /><br />
                <label for="name">Leave your comment here :</label><br />
                <textarea
                    v-model="message"
                    placeholder="Your comment....."
                ></textarea>
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
