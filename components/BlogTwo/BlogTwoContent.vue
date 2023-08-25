<template>
    <section class="blog-area bg-f9f9f9 ptb-100">
        <div class="container">
            <div class="row" v-if="blogs !== []">
                <div class="col-lg-4 col-md-6" v-for="blog in blogs.slice(
                    (currentPage - 1) * perPage,
                    currentPage * perPage,
                )" :key="blog.id">
                    <div class="single-blog-post">
                        <div class="image">
                            <NuxtLink :to="'/blog-details/' + blog.attributes.slug" class="d-block">
                                <img :src="blog.attributes.image.data.attributes.url" alt="blog">
                            </NuxtLink>
                        </div>

                        <div class="content">
                            <h3>
                                <NuxtLink :to="'/blog-details/' + blog.attributes.slug">
                                    {{ blog.attributes.title }}
                                </NuxtLink>
                            </h3>
                            <p>{{ blog.attributes.shortDesc }}</p>
                            <div class="d-flex align-items-center">
                                <img src="~/assets/images/user1.jpg" alt="image">
                                <div class="info">
                                    <h5>David Smith</h5>
                                    <span>Jun 21, 2021</span>
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
            blogs: [],
            rows: 0,
            currentPage: 1,
            perPage: 9,
        }
    },
    created: async function () {
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/blogs?populate=*')
        this.blogs = response.data.data;
        this.rows = this.blogs?.length;
    },
}
</script>