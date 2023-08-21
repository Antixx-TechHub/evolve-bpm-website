<template>
    <div class="portfolio-area pb-70">
        <div class="container">
            <div class="section-title">
                <h2>More Projects You Might Like</h2>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-portfolio-item">
                        <NuxtLink to="/portfolio-details" class="image d-block">
                            <img src="~/assets/images/portfolio/portfolio-img1.jpg" alt="image">
                        </NuxtLink>

                        <div class="content">
                            <h3><NuxtLink to="/portfolio-details">Customer Satisfaction for a Digital Marketing Agency</NuxtLink></h3>
                            <NuxtLink to="/portfolio-details" class="link-btn"><i class="flaticon-next-button"></i></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-portfolio-item">
                        <NuxtLink to="/portfolio-details" class="image d-block">
                            <img src="~/assets/images/portfolio/portfolio-img2.jpg" alt="image">
                        </NuxtLink>

                        <div class="content">
                            <h3><NuxtLink to="/portfolio-details">Return on Investment for Various Digital Marketing</NuxtLink></h3>
                            <NuxtLink to="/portfolio-details" class="link-btn"><i class="flaticon-next-button"></i></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                    <div class="single-portfolio-item">
                        <NuxtLink to="/portfolio-details" class="image d-block">
                            <img src="~/assets/images/portfolio/portfolio-img3.jpg" alt="image">
                        </NuxtLink>

                        <div class="content">
                            <h3><NuxtLink to="/portfolio-details">Google Search Engine Marketing Case Study</NuxtLink></h3>
                            <NuxtLink to="/portfolio-details" class="link-btn"><i class="flaticon-next-button"></i></NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MoreProjects'
}
</script>