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
                            <div class="date">
                                <i class='bx bx-calendar'></i>
                                {{ featuredblog.attributes.date }}
                            </div>
                        </div>
                        <div class="post-content">
                            <h3>
                                <router-link :to="'/featured-blog-details/' + featuredblog.attributes.slug">
                                    {{ featuredblog.attributes.title }}
                                </router-link>
                            </h3>
                            <p>
                                {{ featuredblog.attributes.shortDesc }} <br>
                                <NuxtLink :to="'/featured-blog-details/' + featuredblog.attributes.slug">
                                    {{ featuredblog.attributes.btnText }}
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
            featuredcategory: [],
        }
    },
}
</script>