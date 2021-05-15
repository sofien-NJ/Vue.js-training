<template>
    <div class="our blog">
        <h1>{{ pagename }}</h1>
        <p>{{ pagedescription }}</p>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area">
                        <Blogposts
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
                <div class="col-md-4">
                    <div class="sidebar">
                        <blogsidebar />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Blogposts from "@/components/Blog/blogposts.vue";
import blogsidebar from "@/components/Blog/blogsidebar.vue";
import jsonPosts from "../json/Blog-posts.json";
export default {
    data: function () {
        return {
            pagename: "blog us",
            pagedescription: "These is the blog Page",
            posts: jsonPosts,
        };
    },
    name: "blog",
    components: {
        Blogposts,
        blogsidebar,
    },
};
</script>
