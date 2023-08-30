<template>
    <div class="partner-area bg-f9f9f9 ptb-70">
        <div class="container">
            <div class="row align-items-center" v-if="partners !== null">
                <div class="col-lg-2 col-6 col-sm-4 col-md-4" v-for="slide in partners.partnerSlides" :key="slide.id" >
                    <div class="single-partner-item" >
                        <img :src="slide.image.data.attributes.url" alt="image">
                    </div>
                </div>

                <!-- <div class="col-lg-2 col-6 col-sm-4 col-md-4">
                    <div class="single-partner-item">
                        <img src="~/assets/images/partner/partner-img2.png" alt="image">
                    </div>
                </div>

                <div class="col-lg-2 col-6 col-sm-4 col-md-4">
                    <div class="single-partner-item">
                        <img src="~/assets/images/partner/partner-img3.png" alt="image">
                    </div>
                </div>

                <div class="col-lg-2 col-6 col-sm-4 col-md-4">
                    <div class="single-partner-item">
                        <img src="~/assets/images/partner/partner-img4.png" alt="image">
                    </div>
                </div>

                <div class="col-lg-2 col-6 col-sm-4 col-md-4">
                    <div class="single-partner-item">
                        <img src="~/assets/images/partner/partner-img1.png" alt="image">
                    </div>
                </div>

                <div class="col-lg-2 col-6 col-sm-4 col-md-4">
                    <div class="single-partner-item">
                        <img src="~/assets/images/partner/partner-img5.png" alt="image">
                    </div>
                </div> -->
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