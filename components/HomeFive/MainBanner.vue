<template>
    <div class="home-slides-two owl-carousel owl-theme">
        <carousel
            :autoplay = "true"
            :loop = "true"
            :autoplayTimeout="7000"
            :speed="1000"
            :paginationEnabled = "false"
            :perPageCustom = "[[0, 1]]"
            :perPage="1"
            :navigationEnabled = "true"
            navigationNextLabel="<i class='flaticon-chevron'></i>"
            navigationPrevLabel="<i class='flaticon-back'></i>"
        >
            <slide>
                <div class="banner-section">
                    <div class="container">
                        <div class="home-content">
                            <img src="~/assets/images/banner-img6.png" alt="image">
                            <span class="sub-title">Digital Marketing</span>
                            <h1>Boots Your Website Traffic</h1>
                            <p>Get all kinds of hi-tech decesion making consulting services using Artificial Intelligence and Machine Learning from one umbrella.</p>
                            <NuxtLink to="/about-one" class="default-btn">Learn More</NuxtLink>
                        </div>
                    </div>

                    <div class="shape2"><img src="~/assets/images/shape/shape2.png" alt="image"></div>
                    <div class="shape3"><img src="~/assets/images/shape/shape3.png" alt="image"></div>
                    <div class="shape5"><img src="~/assets/images/shape/shape5.png" alt="image"></div>
                    <div class="shape6"><img src="~/assets/images/shape/shape6.png" alt="image"></div>
                    <div class="shape7"><img src="~/assets/images/shape/shape7.png" alt="image"></div>
                    <div class="shape13"><img src="~/assets/images/shape/shape13.png" alt="image"></div>
                    <div class="shape8"><img src="~/assets/images/shape/shape8.png" alt="image"></div>
                </div>
            </slide>

            <slide>
                <div class="banner-section">
                    <div class="container">
                        <div class="home-content">
                            <img src="~/assets/images/banner-img7.png" alt="image">
                            <span class="sub-title">SEO Marketing</span>
                            <h1>Digital Marketing Specialists</h1>
                            <p>Get all kinds of hi-tech decesion making consulting services using Artificial Intelligence and Machine Learning from one umbrella.</p>
                            <NuxtLink to="/about-two" class="default-btn">Learn More</NuxtLink>
                        </div>
                    </div>

                    <div class="shape2"><img src="~/assets/images/shape/shape2.png" alt="image"></div>
                    <div class="shape3"><img src="~/assets/images/shape/shape3.png" alt="image"></div>
                    <div class="shape5"><img src="~/assets/images/shape/shape5.png" alt="image"></div>
                    <div class="shape6"><img src="~/assets/images/shape/shape6.png" alt="image"></div>
                    <div class="shape7"><img src="~/assets/images/shape/shape7.png" alt="image"></div>
                    <div class="shape13"><img src="~/assets/images/shape/shape13.png" alt="image"></div>
                    <div class="shape8"><img src="~/assets/images/shape/shape8.png" alt="image"></div>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
    export default {
        name: 'MainBanner'
    }
</script>