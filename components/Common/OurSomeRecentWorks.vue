<template>
    <div class="portfolio-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Case Studies</span>
                <h2>Check of Our Some Recent Works & Case Studies</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
        </div>

        <div class="container-fluid">
            <div class="portfolio-slides owl-carousel owl-theme">
                <carousel
                    :autoplay = "true"
                    :loop = "true"
                    :autoplayTimeout="7000"
                    :speed="1000"
                    :paginationEnabled = "false"
                    :perPageCustom = "[[0, 1], [576, 2], [768, 2], [992, 3], [1200, 4], ]"
                    :perPage="1"
                    :navigationEnabled = "true"
                    navigationNextLabel="<i class='flaticon-chevron'></i>"
                    navigationPrevLabel="<i class='flaticon-back'></i>"
                >
                    <slide>
                        <div class="single-portfolio-item">
                            <NuxtLink to="/portfolio-details" class="image d-block">
                                <img src="~/assets/images/portfolio/portfolio-img1.jpg" alt="image">
                            </NuxtLink>

                            <div class="content">
                                <h3><NuxtLink to="/portfolio-details">Customer Satisfaction for a Digital Marketing Agency</NuxtLink></h3>
                                <NuxtLink to="/portfolio-details" class="link-btn"><i class="flaticon-next-button"></i></NuxtLink>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-portfolio-item">
                            <NuxtLink to="/portfolio-details" class="image d-block">
                                <img src="~/assets/images/portfolio/portfolio-img2.jpg" alt="image">
                            </NuxtLink>

                            <div class="content">
                                <h3><NuxtLink to="/portfolio-details">Return on Investment for Various Digital Marketing Strategies</NuxtLink></h3>
                                <NuxtLink to="/portfolio-details" class="link-btn"><i class="flaticon-next-button"></i></NuxtLink>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-portfolio-item">
                            <NuxtLink to="/portfolio-details" class="image d-block">
                                <img src="~/assets/images/portfolio/portfolio-img3.jpg" alt="image">
                            </NuxtLink>

                            <div class="content">
                                <h3><NuxtLink to="/portfolio-details">Google Search Engine Marketing Case Study Analysis</NuxtLink></h3>
                                <NuxtLink to="/portfolio-details" class="link-btn"><i class="flaticon-next-button"></i></NuxtLink>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-portfolio-item">
                            <NuxtLink to="/portfolio-details" class="image d-block">
                                <img src="~/assets/images/portfolio/portfolio-img4.jpg" alt="image">
                            </NuxtLink>

                            <div class="content">
                                <h3><NuxtLink to="/portfolio-details">Analysis of New Product Launch Using Google Double Click</NuxtLink></h3>
                                <NuxtLink to="/portfolio-details" class="link-btn"><i class="flaticon-next-button"></i></NuxtLink>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-portfolio-item">
                            <NuxtLink to="/portfolio-details" class="image d-block">
                                <img src="~/assets/images/portfolio/portfolio-img5.jpg" alt="image">
                            </NuxtLink>

                            <div class="content">
                                <h3><NuxtLink to="/portfolio-details">Social Media Strategies for Online Shopping Cart</NuxtLink></h3>
                                <NuxtLink to="/portfolio-details" class="link-btn"><i class="flaticon-next-button"></i></NuxtLink>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurSomeRecentWorks'
}
</script>