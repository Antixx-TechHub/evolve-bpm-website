<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <div class="it-main-banner-area">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="it-banner-content">
                            <h1>Support your plans for growth with the right IT partner</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisi elit commodi culpa officiis eius maiores hic quis rerum esse iste fugiat enim sit amet consecte adil.</p>
                            <div class="btn-box">
                                <div class="d-flex align-items-center">
                                    <NuxtLink to="/contact" class="default-btn">Contact now</NuxtLink>
                                    <div 
                                        class="video-btn"
                                        v-for="(image, imageIndex) in items"
                                        :key="imageIndex"
                                        @click="index = imageIndex"
                                        style="cursor: pointer"
                                    >
                                        <i class="flaticon-play-button"></i>
                                        Play Video
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="it-banner-image">
                            <img src="~/assets/images/startup-it-agency/banner/main.png" alt="image">
                        </div>
                    </div>
                </div>
            </div>

            <div class="it-banner-shape1">
                <img src="~/assets/images/startup-it-agency/banner/shape1.png" alt="image">
            </div>
            <div class="it-banner-shape2">
                <img src="~/assets/images/startup-it-agency/banner/shape2.png" alt="image">
            </div>
            <div class="it-banner-shape3">
                <img src="~/assets/images/startup-it-agency/banner/shape3.png" alt="image">
            </div>
        </div>
    </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'

export default {
    name: 'MainBanner',
    components: { CoolLightBox },
    data: function () {
        return {
            items: [
                {
                    src: 'https://www.youtube.com/watch?v=Y5KCDWi7h9o',
                }
            ],
            index: null
        };
    },
}
</script>