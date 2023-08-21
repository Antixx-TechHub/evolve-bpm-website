<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <div class="main-banner-area">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="main-banner-content">
                            <span class="sub-title">Growth Your Business</span>
                            <h1>We Provide Best Digital Marketing Solutions</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <div class="btn-box">
                                <div class="d-flex align-items-center">
                                    <NuxtLink to="/contact" class="default-btn">Get Started</NuxtLink>
                                    <div class="video-btn"
                                        v-for="(image, imageIndex) in items"
                                        :key="imageIndex"
                                        @click="index = imageIndex"
                                        style="cursor: pointer"
                                    >
                                        <i class="flaticon-play-button"></i> 
                                        Watch Video
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="main-banner-image">
                            <img src="~/assets/images/banner-img1.jpg" alt="image">
                        </div>
                    </div>
                </div>
            </div>

            <div class="shape1"><img src="~/assets/images/shape/shape1.png" alt="image"></div>
            <div class="shape2"><img src="~/assets/images/shape/shape2.png" alt="image"></div>
            <div class="shape3"><img src="~/assets/images/shape/shape3.png" alt="image"></div>
            <div class="shape4"><img src="~/assets/images/shape/shape4.png" alt="image"></div>
            <div class="shape5"><img src="~/assets/images/shape/shape5.png" alt="image"></div>
            <div class="shape6"><img src="~/assets/images/shape/shape6.png" alt="image"></div>
            <div class="shape7"><img src="~/assets/images/shape/shape7.png" alt="image"></div>
            <div class="shape8"><img src="~/assets/images/shape/shape8.png" alt="image"></div>
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