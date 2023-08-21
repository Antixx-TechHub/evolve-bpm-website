<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>
        
        <div class="rivate-solutions-area ptb-100">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="rivate-solutions-image">
                            <img src="~/assets/images/more-home/solutions/solutions.png" alt="image">

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

                    <div class="col-lg-6 col-md-12">
                        <div class="rivate-solutions-content">
                            <span>DIGITAL MARKETING</span>
                            <h3>Creative Solutions Creative Results</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <div class="solutions-inner-content">
                                <h4>Core Development</h4>
                                <p>Quis ipsum suspendisse ultrices gravida sed do eiusmod tempor.</p>
                            </div>
                            <div class="solutions-inner-content color-two">
                                <h4>Define Your Choices</h4>
                                <p>Quis ipsum suspendisse ultrices gravida sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'

export default {
    name: 'CreativeSolutions',
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