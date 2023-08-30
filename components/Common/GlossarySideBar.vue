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
                        <h4 class="title usmall">
                            <router-link :to="'/glossary-details/' + glossary.attributes.slug">
                                {{ glossary.attributes.title }}
                            </router-link>
                        </h4>
                        <time datetime="2022-06-30">{{ glossary.attributes.date }}</time>
                    </div>
                </article>
        </div>

        <div class="widget widget_categories">
            <h3 class="widget-title">Categories</h3>
            <ul>
                <li v-for="glossarycategory in glossarycategories" :key="glossarycategory.id">
                    <router-link :to="`/glossary-category-details/${glossarycategory.attributes.slug}`">{{
                        glossarycategory.attributes.name }}</router-link>
                </li>
            </ul>
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
        this.glossarycategories = response.data.data.sort((a, b) => a.id - b.id);
    },
}
</script>