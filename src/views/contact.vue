<template>
    <div class="post-box">
        <h1>{{ pagename }}</h1>
        <p>{{ pagedescription }}</p>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="sidebar">
                        <ContactUS />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContactUS from "@/components/Contact/contactus.vue";

export default {
    data: function () {
        return {
            pagename: "Profile",
        };
    },
    name: "contact",
    components: {
        ContactUS,
    },
};
</script>
