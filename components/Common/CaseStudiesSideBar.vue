<template>
    <div class="widget-area">
        <div class="widget widget_search">
            <h3 class="widget-title">Search</h3>

            <form class="search-form">
                <label>
                    <span class="screen-reader-text">Search for:</span>
                    <input type="search" class="search-field" placeholder="Search...">
                </label>
                <button type="submit"><i class="bx bx-search-alt"></i></button>
            </form>
        </div>

        <div class="widget widget_posts_thumb">
            <h3 class="widget-title">Popular Posts</h3>
            <article class="item" v-for="casestudy in casestudies.slice(0, 3)" :key="casestudy.id">
                <router-link :to="'/case-studies-details/' + casestudy.attributes.slug" class="thumb">
                    <img :src="casestudy.attributes.image.data.attributes.url" alt="blog">
                </router-link>
                <div class="info">
                    <h4 class="title usmall">
                        <router-link :to="'/case-studies-details/' + casestudy.attributes.slug">
                            {{ casestudy.attributes.title }}
                        </router-link>
                    </h4>
                    <time datetime="2022-06-30">{{ casestudy.attributes.date }}</time>
                </div>
            </article>

            <!-- <article class="item">
                <NuxtLink to="/blog-details-one" class="thumb">
                    <span class="fullimage cover bg1" role="img"></span>
                </NuxtLink>
                <div class="info">
                    <span>June 10, 2021</span>
                    <h4 class="title usmall">
                        <NuxtLink to="/blog-details-one">The Data Surrounding Higher Education</NuxtLink>
                    </h4>
                </div>

                <div class="clear"></div>
            </article>

            <article class="item">
                <NuxtLink to="/blog-details-one" class="thumb">
                    <span class="fullimage cover bg2" role="img"></span>
                </NuxtLink>
                <div class="info">
                    <span>June 21, 2021</span>
                    <h4 class="title usmall">
                        <NuxtLink to="/blog-details-one">Conversion Rate the Sales Funnel Optimization</NuxtLink>
                    </h4>
                </div>

                <div class="clear"></div>
            </article>

            <article class="item">
                <NuxtLink to="/blog-details-one" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </NuxtLink>
                <div class="info">
                    <span>June 30, 2021</span>
                    <h4 class="title usmall">
                        <NuxtLink to="/blog-details-one">Business Data is changing the world’s Energy</NuxtLink>
                    </h4>
                </div>

                <div class="clear"></div>
            </article> -->
        </div>

        <div class="widget widget_categories">
            <h3 class="widget-title">Categories</h3>
            <ul>
                <li v-for="casestudiescategory in casestudiescategories" :key="casestudiescategory.id">
                    <router-link :to="`/case-studies-category-details/${casestudiescategory.attributes.slug}`">
                        {{ casestudiescategory.attributes.name }}</router-link>
                </li>
            </ul>

            <!-- <ul>
                <li><a href="/blog-one">Design <span class="post-count">(03)</span></a></li>
                <li><a href="/blog-one">Lifestyle <span class="post-count">(05)</span></a></li>
                <li><a href="/blog-one">Script <span class="post-count">(10)</span></a></li>
                <li><a href="/blog-one">Device <span class="post-count">(08)</span></a></li>
                <li><a href="/blog-one">Tips <span class="post-count">(01)</span></a></li>
            </ul> -->
        </div>

        <!-- <div class="widget widget_tag_cloud">
            <h3 class="widget-title">Popular Tags</h3>

            <div class="tagcloud">
                <a href="/blog-one">Business <span class="tag-link-count"> (3)</span></a>
                <a href="/blog-one">Design <span class="tag-link-count"> (3)</span></a>
                <a href="/blog-one">Aike <span class="tag-link-count"> (2)</span></a>
                <a href="/blog-one">Fashion <span class="tag-link-count"> (2)</span></a>
                <a href="/blog-one">Travel <span class="tag-link-count"> (1)</span></a>
                <a href="/blog-one">Smart <span class="tag-link-count"> (1)</span></a>
                <a href="/blog-one">Marketing <span class="tag-link-count"> (1)</span></a>
                <a href="/blog-one">Tips <span class="tag-link-count"> (2)</span></a>
            </div>
        </div>

        <div class="widget widget_instagram">
            <ul>
                <li>
                    <div class="box">
                        <img src="~/assets/images/team/team-img1.jpg" alt="image">
                        <i class="bx bxl-instagram"></i>
                        <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                    </div>
                </li>

                <li>
                    <div class="box">
                        <img src="~/assets/images/team/team-img2.jpg" alt="image">
                        <i class="bx bxl-instagram"></i>
                        <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                    </div>
                </li>

                <li>
                    <div class="box">
                        <img src="~/assets/images/team/team-img3.jpg" alt="image">
                        <i class="bx bxl-instagram"></i>
                        <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                    </div>
                </li>

                <li>
                    <div class="box">
                        <img src="~/assets/images/team/team-img4.jpg" alt="image">
                        <i class="bx bxl-instagram"></i>
                        <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                    </div>
                </li>

                <li>
                    <div class="box">
                        <img src="~/assets/images/team/team-img5.jpg" alt="image">
                        <i class="bx bxl-instagram"></i>
                        <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                    </div>
                </li>

                <li>
                    <div class="box">
                        <img src="~/assets/images/team/team-img6.jpg" alt="image">
                        <i class="bx bxl-instagram"></i>
                        <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                    </div>
                </li>

                <li>
                    <div class="box">
                        <img src="~/assets/images/team/team-img7.jpg" alt="image">
                        <i class="bx bxl-instagram"></i>
                        <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                    </div>
                </li>

                <li>
                    <div class="box">
                        <img src="~/assets/images/team/team-img8.jpg" alt="image">
                        <i class="bx bxl-instagram"></i>
                        <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                    </div>
                </li>

                <li>
                    <div class="box">
                        <img src="~/assets/images/team/team-img9.jpg" alt="image">
                        <i class="bx bxl-instagram"></i>
                        <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                    </div>
                </li>
            </ul>
        </div> -->
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'BlogSidebar',
    data() {
        return {
            casestudiescategories: [],
            casestudies: [],
        }
    },
    created: async function () {
        axios.get('https://evolvestrapi.pbwebvision.in/api/case-studies?populate=*')
            .then(response => {
                this.casestudies = response.data.data.sort((b, a) => a.id - b.id);
            })
            .catch(error => {
                console.error(error);
            });
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/case-study-categories')
        this.casestudiescategories = response.data.data.sort((b, a) => a.id - b.id);
    },
}
</script>