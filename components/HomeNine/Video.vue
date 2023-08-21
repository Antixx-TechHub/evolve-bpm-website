<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <div class="rivate-video-area">
            <div class="container">
                <div class="rivate-video-content wow animate__animated animate__fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                    <img src="~/assets/images/more-home/video/video-2.jpg" alt="image">       

                    <div 
                        class="video-btn"
                        v-for="(image, imageIndex) in items"
                        :key="imageIndex"
                        @click="index = imageIndex"
                        style="cursor: pointer"
                    >
                        <i class="flaticon-play-button"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'

export default {
    name: 'Video',
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