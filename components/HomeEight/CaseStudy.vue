<template>
    <div class="case-study-area pb-100">
        <div class="container">
            <div class="startup-it-agency-title style-two">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 col-md-12">
                        <div class="div">
                            <span>Case study</span>
                            <h2>Introduce our projects and check recent work here</h2>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut
                            labore dolore magna aliqua. quis adipisicing elit nostrud exercitation ullamco laboris.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid" v-if="casestudies !== []">
            <div class="case-study-slides">
                <carousel :autoplay="true" :loop="true" :autoplayTimeout="7000" :speed="1000" :paginationEnabled="true"
                    :perPageCustom="[[0, 1], [576, 1], [768, 2], [1024, 3], [1200, 4], [1200, 5]]">
                    <slide v-for="casestudy in casestudies.slice(
                        (currentPage - 1) * perPage,
                        currentPage * perPage,
                    )" :key="casestudy.id">
                        <div class="case-study-card">
                            <div class="case-study-image">
                                <NuxtLink :to="'/case-studies-details/' + casestudy.attributes.slug" class="d-block">
                                    <img :src="casestudy.attributes.image.data.attributes.url" alt="blog">
                                </NuxtLink>
                            </div>
                            <div class="case-study-content">
                                <!-- <span>{{slide.tag}}</span> -->
                                <h3>
                                    <NuxtLink :to="'/case-studies-details/' + casestudy.attributes.slug">
                                        {{ casestudy.attributes.title }}
                                    </NuxtLink>
                                </h3>
                            </div>
                        </div>
                    </slide>
                </carousel>
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