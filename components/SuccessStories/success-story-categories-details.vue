<template>
    <div class="blog-area ptb-100 bg-FAFAFA">
        <div class="container">
            <div class="row justify-content-center" v-if="details !== []">
                <div class="col-lg-4 col-md-6" v-for="successstory in details[0].attributes?.success_stories?.data" :key="successstory.id">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <router-link :to="'/success-stories-details/' + successstory.attributes.slug" class="d-block">
                                <img :src="successstory?.attributes?.image?.data?.attributes?.url" alt="blog">
                            </router-link>
                            <!-- <div class="date">
                                <i class='bx bx-calendar'></i>
                                {{ successstory.attributes.date }}
                            </div> -->
                        </div>
                        <div class="content">
                            <h3>
                                <NuxtLink :to="'/success-stories-details/' + successstory.attributes.slug">
                                    {{ successstory.attributes.title }}
                                </NuxtLink>
                            </h3>
                            <p>{{ successstory.attributes.shortDesc }}</p>
                            <div class="d-flex align-items-center">
                                <img :src="successstory.attributes.avtar.data.attributes.url" alt="blog">
                                <div class="info">
                                    <h5>{{ successstory.attributes.author }}</h5>
                                    <span>{{ successstory.attributes.date }}</span>
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
            categories: []
        }
    },
}
</script>