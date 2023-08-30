<template>
    <div class="rivate-blog-area pt-100 pb-75">
        <div class="container">
            <div class="section-title with-gradient-color">
                <span class="sub-title">OUR BLOG</span>
                <h2>Our Latest Media</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div class="row justify-content-center" v-if="blogs !== []">
                <div class="col-lg-4 col-md-6" v-for="blog in blogs.slice(0, 3)" :key="blog.id">
                    <div class="rivate-blog-card">
                        <div class="blog-image">
                            <NuxtLink :to="'/blog-details/' + blog.attributes.slug" class="d-block">
                                <img :src="blog.attributes.image.data.attributes.url" alt="blog">
                            </NuxtLink>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <NuxtLink :to="'/blog-details/' + blog.attributes.slug">
                                    {{ blog.attributes.title }}
                                </NuxtLink>
                            </h3>

                            <div class="blog-info d-flex align-items-center">
                                <img :src="blog.attributes.avtar.data.attributes.url" alt="blog">
                                <div class="info">
                                    <h5>{{ blog.attributes.author }}</h5>
                                </div>
                                <div class="info-date">
                                    <span><i class='bx bxs-calendar'></i> {{ blog.attributes.date }}</span>
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

import axios from 'axios'

export default {
    name: 'LatestBlog',
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