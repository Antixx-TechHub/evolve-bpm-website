<template>
    <section class="blog-area bg-f9f9f9 ptb-100">
        <div class="container">
            <div class="section-title">
                <span>
                    <h2>Our Featuredblog Blog</h2>
                </span>
            </div>
            <div class="row" v-if="featuredblogs !== []">
                <div class="col-lg-4 col-md-6" v-for="featuredblog in featuredblogs.slice(
                    (currentPage - 1) * perPage,
                    currentPage * perPage,
                )" :key="featuredblog.id">
                    <div class="single-blog-post">
                        <div class="image">
                            <NuxtLink :to="'/featured-blog-details/' + featuredblog.attributes.slug" class="d-block">
                                <img :src="featuredblog.attributes.image.data.attributes.url" alt="blog">
                            </NuxtLink>
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

                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area text-center">
                        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="itemList"
                            align="center"></b-pagination>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import axios from 'axios'

export default {
    name: 'BlogContent',
    data() {
        return {
            featuredblogs: [],
            rows: 0,
            currentPage: 1,
            perPage: 9,
        }
    },
    created: async function () {
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/featuredblogs?populate=*')
        this.featuredblogs = response.data.data;
        this.rows = this.featuredblogs?.length;
    },
}
</script>