<template>
    <div class="blog-details-area ">
        <div class="container">
            <div class="row justify-content-center" v-if="details !== []">
                <div class="col-lg-4 col-md-6" v-for="blog in details[0].attributes?.blogs?.data" :key="blog.id">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <router-link :to="'/blog-details/' + blog.attributes.slug" class="d-block">
                                <img :src="blog?.attributes?.image?.data?.attributes?.url" alt="blog">
                            </router-link>
                            <div class="date">
                                <i class='bx bx-calendar'></i>
                                {{ blog.attributes.date }}
                            </div>
                        </div>
                        <div class="post-content">
                            <h3>
                                <router-link :to="'/blog-details/' + blog.attributes.slug">
                                    {{ blog.attributes.title }}
                                </router-link>
                            </h3>
                            <p>
                                {{ blog.attributes.shortDesc }} <br>
                                <NuxtLink :to="'/blog-details/' + blog.attributes.slug">
                                    {{ blog.attributes.btnText }}
                                </NuxtLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CategoryDetails',
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent,
            categories: [],
        }
    },
}
</script>