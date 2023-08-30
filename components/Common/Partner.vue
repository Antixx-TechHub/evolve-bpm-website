<template>
    <div class="partner-area bg-f9f9f9 ptb-70">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12 col-6 col-sm-4 col-md-4">
                    <carousel :autoplay="true" :loop="true" :autoplayTimeout="7000" :speed="1000" :paginationEnabled="true"
                        :perPageCustom="[[0, 2], [768, 3], [1024, 6], [1200, 6]]" v-if="partners !== null">
                        <slide v-for="slide in partners.partnerSlides" :key="slide.id">
                            <div class="single-partner-item">
                                <img :src="slide.image.data.attributes.url" alt="image">
                            </div>
                        </slide>
                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'Partner',
    data: () => ({
        settings: {
            itemsToShow: 6,
            snapAlign: 'center',
        },
        partners: null,
    }),
    created: async function () {
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/partner?populate=partnerSlides.image')
        const { data: { attributes } } = response.data
        this.partners = attributes
    },
}
</script>