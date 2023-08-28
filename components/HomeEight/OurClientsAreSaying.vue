<template>
    <div class="rivate-clients-area ptb-100">
        <div class="container">
            <div class="section-title with-gradient-color">
                <span class="sub-title">TESTIMONIALS</span>
                <h2>What Our Clients Are Saying?</h2>
            </div>

            <div class="rivate-clients-slides owl-carousel owl-theme">
                <carousel :autoplay="true" :loop="true" :autoplayTimeout="5000" :speed="1000" :paginationEnabled="true"
                    :perPageCustom="[[0, 1], [576, 2], [768, 2], [1024, 3], [1200, 3]]" v-if="customerreviews !== null">
                    <slide v-for="customerreview in customerreviews.singleFeedbacks" :key="customerreview.id">
                        <div class="rivate-clients-card">
                            <div class="client-info">
                                <div class="d-flex align-items-center">
                                    <img :src="customerreview.media.data.attributes.url" alt="Testimonials">
                                    <div class="title">
                                        <h3>{{ customerreview.name }}</h3>
                                        <span>{{ customerreview.designation }}</span>
                                    </div>
                                </div>
                            </div>
                            <p>{{ customerreview.shortDec }}</p>
                            <div class="icon">
                                <i class="flaticon-quote"></i>
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
    name: 'OurClientsAreSaying',
    data() {
        return {
            customerreviews: null,
        }
    },
    created: async function () {
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/customerreview?populate=singleFeedbacks.media')
        const { data: { attributes } } = response.data;
        this.customerreviews = attributes
    },
}
</script>