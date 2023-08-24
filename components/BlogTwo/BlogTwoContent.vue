<template>
    <section class="blog-area bg-f9f9f9 ptb-100">
        <div class="container">
                <span>
                    <h2>Our Latest Blog</h2>
                </span>
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

                            <p>
                                {{ blog.attributes.shortDesc }} <br>
                                <NuxtLink :to="'/blog-details/' + blog.attributes.slug">
                                    {{ blog.attributes.btnText }}
                                </NuxtLink>
                            </p>

                            <div class="info">
                                <div class="post-by">
                                    <h6>{{ blog.attributes.name }}</h6>
                                </div>
                            </div>

                            <div class="d-flex align-items-center">
                                <div class="info">
                                    <span>
                                        <div class="date">
                                            <i class='bx bx-calendar'></i>
                                            {{ blog.attributes.date }}
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="image">
                            <NuxtLink to="/blog-details-one" class="d-block">
                                <img src="~/assets/images/blog/blog-img2.jpg" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="content">
                            <h3><NuxtLink to="/blog-details-one">Digital Marketing Strategies for Lead Generation</NuxtLink></h3>
                            <div class="d-flex align-items-center">
                                <img src="~/assets/images/user2.jpg" alt="image">
                                <div class="info">
                                    <h5>Sarah Taylor</h5>
                                    <span>Jun 20, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="image">
                            <NuxtLink to="/blog-details-one" class="d-block">
                                <img src="~/assets/images/blog/blog-img3.jpg" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="content">
                            <h3><NuxtLink to="/blog-details-one">Agencies Can Successfully Recover From COVID?</NuxtLink></h3>
                            <div class="d-flex align-items-center">
                                <img src="~/assets/images/user3.jpg" alt="image">
                                <div class="info">
                                    <h5>Steven Gibson</h5>
                                    <span>Jun 19, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="image">
                            <NuxtLink to="/blog-details-one" class="d-block">
                                <img src="~/assets/images/blog/blog-img4.jpg" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="content">
                            <h3><NuxtLink to="/blog-details-one">Preparing E-Commerce for the Post-COVID Bounce Back</NuxtLink></h3>
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

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="image">
                            <NuxtLink to="/blog-details-one" class="d-block">
                                <img src="~/assets/images/blog/blog-img5.jpg" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="content">
                            <h3><NuxtLink to="/blog-details-one">The State of Local SEO Industry Report 2021</NuxtLink></h3>
                            <div class="d-flex align-items-center">
                                <img src="~/assets/images/user2.jpg" alt="image">
                                <div class="info">
                                    <h5>Sarah Taylor</h5>
                                    <span>Jun 20, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="image">
                            <NuxtLink to="/blog-details-one" class="d-block">
                                <img src="~/assets/images/blog/blog-img6.jpg" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="content">
                            <h3><NuxtLink to="/blog-details-one">Should You Test That? When to Engage in SEO Split Tests</NuxtLink></h3>
                            <div class="d-flex align-items-center">
                                <img src="~/assets/images/user3.jpg" alt="image">
                                <div class="info">
                                    <h5>Steven Gibson</h5>
                                    <span>Jun 19, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->

                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area text-center">
                        <!-- <a href="/blog-two" class="prev page-numbers"><i class='bx bx-chevrons-left'></i></a>
                        <span class="page-numbers current" aria-current="page">1</span>
                        <a href="/blog-two" class="page-numbers">2</a>
                        <a href="/blog-two" class="page-numbers">3</a>
                        <a href="/blog-two" class="page-numbers">4</a>
                        <a href="/blog-two" class="next page-numbers"><i class='bx bx-chevrons-right'></i></a> -->
                   <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="itemList"
                        align="center"></b-pagination>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import axios from 'axios';

export default {
    name: 'BlogTwoContent',
    data() {
        return {
            blogs: [],
            rows: 0,
            currentPage: 1,
            perPage: 6,
        }
    },
    created: async function () {
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/blogs?populate=*')
        this.blogs = response.data.data.sort((b, a) => a.id - b.id);
        this.rows = this.blogs?.length;
    },
}
</script>