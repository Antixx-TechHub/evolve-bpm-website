<template>
    <div class="it-partner-area pb-75">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12 col-6 col-sm-4 col-md-4">
                    <div class="it-partner-item">
                        <carousel :autoplay="true" :loop="true" :paginationEnabled="false"
                            :perPageCustom="[[0, 3], [576, 3], [768, 3], [1200, 7]]" v-if="partners !== null">
                            <slide v-for="slide in partners.partnerSlides" :key="slide.id">
                                <div class="single-partner-item">
                                    <a>
                                        <img :src="slide.image.data.attributes.url" alt="image">
                                    </a>
                                </div>
                            </slide>
                        </carousel>
                    </div>
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
            itemsToShow: 1,
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