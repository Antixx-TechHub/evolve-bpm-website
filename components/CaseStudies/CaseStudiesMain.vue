<template>
    <div class="blog-area pt-100 pb-75">
        <div class="container">
            <div class="row justify-content-center" v-if="casestudies !== []">
                <div class="col-lg-4 col-md-6 justify-content-center" v-for="casestudy in casestudies.slice(
                    (currentPage - 1) * perPage,
                    currentPage * perPage,
                )" :key="casestudy.id">
                    <div class="single-blog-post">
                        <div class="image">
                            <NuxtLink :to="'/case-studies-details/' + casestudy.attributes.slug" class="d-block">
                                <img :src="casestudy.attributes.image.data.attributes.url" alt="blog">
                            </NuxtLink>
                        </div>

                        <div class="content">
                            <h3>
                                <NuxtLink :to="'/case-studies-details/' + casestudy.attributes.slug">
                                    {{ casestudy.attributes.title }}
                                </NuxtLink>
                            </h3>
                            <p>{{ casestudy.attributes.shortDesc }}</p>
                            <div class="d-flex align-items-center">
                                <img :src="casestudy.attributes.avtar.data.attributes.url" alt="blog">
                                <div class="info">
                                    <h5>{{ casestudy.attributes.author }}</h5>
                                    <span>{{ casestudy.attributes.date }}</span>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="post-info">
                            <div class="post-by">
                                <h6>{{ casestudy.attributes.name }}</h6>
                            </div>
                        </div> -->
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
</template>

<script>

import axios from 'axios'

export default {
    name: 'Casestudy',
    data() {
        return {
            casestudies: [],
            rows: 0,
            currentPage: 1,
            perPage: 6,
        }
    },
    created: async function () {
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/case-studies?populate=*')
        this.casestudies = response.data.data.sort((b, a) => a.id - b.id);
        this.rows = this.casestudies?.length;
    },
}
</script>