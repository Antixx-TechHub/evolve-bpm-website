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
                <article class="item" v-for="glossary in glossaries.slice(0, 3)" :key="glossary.id">
                    <router-link :to="'/glossary-details/' + glossary.attributes.slug" class="thumb">
                        <img :src="glossary.attributes.image.data.attributes.url" alt="blog">
                    </router-link>
                    <div class="info">
                        <time datetime="2022-06-30">{{ glossary.attributes.date }}</time>
                        <h4 class="title usmall">
                            <router-link :to="'/glossary-details/' + glossary.attributes.slug">
                                {{ glossary.attributes.title }}
                            </router-link>
                        </h4>
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
                <li v-for="glossarycategory in glossarycategories" :key="glossarycategory.id">
                    <router-link :to="`/glossary-category-details/${glossarycategory.attributes.slug}`">{{
                        glossarycategory.attributes.name }}</router-link>
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
        
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'GlossarySidebar',
    data() {
        return {
            glossarycategories: [],
            glossaries :[],
        }
    },
    created: async function () {
        axios.get('https://evolvestrapi.pbwebvision.in/api/glossaries?populate=*')
            .then(response => {
                this.glossaries = response.data.data.sort((b, a) => a.id - b.id);
            })
            .catch(error => {
                console.error(error);
            });
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/glossary-categories')
        this.glossarycategories = response.data.data.sort((b, a) => a.id - b.id);
    },
}
</script>