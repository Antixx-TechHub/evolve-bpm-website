<template>
    <section class="blog-area bg-f9f9f9 ptb-100">
        <div class="container">
            <div class="section-title-with-large-box">
            </div>
            <div class="row" v-if="portfolios !== []">
                <div class="col-lg-4 col-md-6" v-for="portfolio in portfolios.slice(
                    (currentPage - 1) * perPage,
                    currentPage * perPage,
                )" :key="portfolio.id">
                    <div class="single-blog-post">
                        <div class="image">
                            <NuxtLink :to="'/portpolio-details/' + portfolio.attributes.slug" class="d-block">
                                <img :src="portfolio.attributes.image.data.attributes.url" alt="blog">
                            </NuxtLink>
                        </div>

                        <div class="content">
                            <h3>
                                <NuxtLink :to="'/portpolio-details/' + portfolio.attributes.slug">
                                    {{ portfolio.attributes.title }}
                                </NuxtLink>
                            </h3>
                            <p>{{ portfolio.attributes.shortDesc }}</p>
                            <div class="d-flex align-items-center">
                                <img :src="portfolio.attributes.avtar.data.attributes.url" alt="blog">
                                <div class="info">
                                    <h5>{{ portfolio.attributes.author }}</h5>
                                    <span>{{ portfolio.attributes.completed }}</span>
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
            portfolios: [],
            rows: 0,
            currentPage: 1,
            perPage: 9,
        }
    },
    created: async function () {
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/portfolios?populate=*')
        this.portfolios = response.data.data;
        this.rows = this.portfolios?.length;
    },
}
</script>