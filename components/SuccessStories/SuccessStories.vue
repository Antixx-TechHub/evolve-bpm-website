<template>
    <div class="blog-area ptb-100 bg-FAFAFA">
        <div class="container">
            <div class="row justify-content-center" v-if="successstories !== []">
                <div class="col-lg-4 col-md-6" v-for="successstory in successstories.slice(
                    (currentPage - 1) * perPage,
                    currentPage * perPage,
                )" :key="successstory.id">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <NuxtLink :to="'/success-stories-details/' + successstory.attributes.slug" class="d-block">
                                <img :src="successstory.attributes.image.data.attributes.url" alt="blog">
                            </NuxtLink>
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
                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="itemList"
                            align="center"></b-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'successstories',
    data() {
        return {
            successstories: [],
            rows: 0,
            currentPage: 1,
            perPage: 6,
        }
    },
    created: async function () {
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/successstories?populate=*')
        this.successstories = response.data.data.sort((b, a) => a.id - b.id);
        this.rows = this.successstories?.length;
    },
}
</script>