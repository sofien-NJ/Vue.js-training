<template>
    <div class="post-box">
        <span class="post-views">{{ views }}</span>
        <h3 class="post-title">{{ title }}</h3>
        <span class="post-date">{{ date }}</span>
        <p>
            {{ content | Shorten(10) }}
        </p>
        <div class="row">
            <div class="col sm-6">
                <span class="post-author">{{ author }}</span>
            </div>
            <div class="col sm-6 text-right">
                <span class="post-categorie">{{ categorie }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["views", "title", "date", "content", "author", "categorie"],
    name: "post",
};
</script>

<style lang="scss" scoped>
.post-box {
    padding: 25px;
    background-color: azure;
    box-shadow: 0 0 10px rgb(90, 87, 87);
    position: relative;
    text-align: left;
    margin-bottom: 20px;
    .post-views {
        position: absolute;
        top: 5px;
        right: 5px;
        padding: auto;
        background-color: #117a8b;
        border-radius: 4px;
        font-weight: bold;
    }
    .post-title {
        color: black;
    }
    .post-date {
        display: block;
        padding: inherit;
        color: #656579;
        font-size: 14px;
    }
    .post-categorie {
        padding: 4px 6px;
        background-color: rgb(243, 190, 109);
        border-radius: 4px;
        color: #fff;
    }
    .post-author {
        padding: 4px 6px;
        background-color: rgb(121, 119, 116);
        border-radius: 4px;
        color: #fff;
    }
}
</style>
