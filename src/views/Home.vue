<template>
    <div class="home">
        <h1>{{ pagename }}</h1>
        <p>{{ pagedescription }}</p>
        <div class="col-md-10">
            <div class="sidebar">
                <offre
                    v-for="post in posts"
                    :key="post.id"
                    :views="post.views"
                    :title="post.title"
                    :date="post.date"
                    :content="post.content"
                    :author="post.author"
                    :categorie="post.categorie"
                />
            </div>
        </div>
    </div>
</template>

<script>
import offre from "@/components/Offre/offre.vue";
import jsonPosts from "../json/Blog-posts.json";
import Offre from "../components/Offre/offre.vue";
export default {
    data: function () {
        return {
            pagename: "blog us",
            pagedescription: "These is the blog Page",
            posts: jsonPosts,
        };
    },
    name: "Home",

    components: {
        offre,
    },
    Offre,
};
</script>
