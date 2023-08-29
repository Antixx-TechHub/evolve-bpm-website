<template>
    <div class="blog-area ptb-100 bg-FAFAFA">
        <div class="container">
            <div class="row justify-content-center" v-if="details !== []">
                <div class="col-lg-4 col-md-6" v-for="featuredblog in details[0].attributes?.featured_blogs?.data"
                    :key="featuredblog.id">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <router-link :to="'/featured-blog-details/' + featuredblog.attributes.slug" class="d-block">
                                <img :src="featuredblog?.attributes?.image?.data?.attributes?.url" alt="blog">
                            </router-link>
                        </div>
                        <div class="content">
                            <h3>
                                <NuxtLink :to="'/featured-blog-details/' + featuredblog.attributes.slug">
                                    {{ featuredblog.attributes.title }}
                                </NuxtLink>
                            </h3>
                            <p>{{ featuredblog.attributes.shortDesc }}</p>
                            <div class="d-flex align-items-center">
                                <img :src="featuredblog.attributes.avtar.data.attributes.url" alt="blog">
                                <div class="info">
                                    <h5>{{ featuredblog.attributes.author }}</h5>
                                    <span>{{ featuredblog.attributes.date }}</span>
                                </div>
                            </div>
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