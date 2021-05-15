<template>
    <div class="post-box">
        <span class="post-views">{{ views }}</span>
        <h3 class="post-title">{{ title }}</h3>
        <span class="post-date">{{ date }}</span>

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
    name: "blog_sidebar",
};
</script>
