<template>
    <div class="portfolio-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-portfolio-box">
                        <NuxtLink to="/portfolio-details" class="image d-block">
                            <img src="~/assets/images/portfolio/portfolio-img1.jpg" alt="image">
                        </NuxtLink>

                        <div class="content">
                            <h3><NuxtLink to="/portfolio-details">Movie Recommendation</NuxtLink></h3>
                            <span>System Project</span>
                            <NuxtLink to="/portfolio-details" class="link-btn"><i class="flaticon-next-button"></i></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-portfolio-box">
                        <NuxtLink to="/portfolio-details" class="image d-block">
                            <img src="~/assets/images/portfolio/portfolio-img2.jpg" alt="image">
                        </NuxtLink>

                        <div class="content">
                            <h3><NuxtLink to="/portfolio-details">Customer Segmentation</NuxtLink></h3>
                            <span>Machine Learning</span>
                            <NuxtLink to="/portfolio-details" class="link-btn"><i class="flaticon-next-button"></i></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-portfolio-box">
                        <NuxtLink to="/portfolio-details" class="image d-block">
                            <img src="~/assets/images/portfolio/portfolio-img3.jpg" alt="image">
                        </NuxtLink>

                        <div class="content">
                            <h3><NuxtLink to="/portfolio-details">Data Analysis</NuxtLink></h3>
                            <span>Web Project</span>
                            <NuxtLink to="/portfolio-details" class="link-btn"><i class="flaticon-next-button"></i></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-portfolio-box">
                        <NuxtLink to="/portfolio-details" class="image d-block">
                            <img src="~/assets/images/portfolio/portfolio-img4.jpg" alt="image">
                        </NuxtLink>

                        <div class="content">
                            <h3><NuxtLink to="/portfolio-details">Detection Project</NuxtLink></h3>
                            <span>Programming</span>
                            <NuxtLink to="/portfolio-details" class="link-btn"><i class="flaticon-next-button"></i></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-portfolio-box">
                        <NuxtLink to="/portfolio-details" class="image d-block">
                            <img src="~/assets/images/portfolio/portfolio-img5.jpg" alt="image">
                        </NuxtLink>

                        <div class="content">
                            <h3><NuxtLink to="/portfolio-details">Data Scientist</NuxtLink></h3>
                            <span>Data Science</span>
                            <NuxtLink to="/portfolio-details" class="link-btn"><i class="flaticon-next-button"></i></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-portfolio-box">
                        <NuxtLink to="/portfolio-details" class="image d-block">
                            <img src="~/assets/images/portfolio/portfolio-img6.jpg" alt="image">
                        </NuxtLink>

                        <div class="content">
                            <h3><NuxtLink to="/portfolio-details">Benefits Research</NuxtLink></h3>
                            <span>Science Projects</span>
                            <NuxtLink to="/portfolio-details" class="link-btn"><i class="flaticon-next-button"></i></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area text-center">
                        <a href="/portfolio-five" class="prev page-numbers"><i class='bx bx-chevrons-left'></i></a>
                        <span class="page-numbers current" aria-current="page">1</span>
                        <a href="/portfolio-five" class="page-numbers">2</a>
                        <a href="/portfolio-five" class="page-numbers">3</a>
                        <a href="/portfolio-five" class="page-numbers">4</a>
                        <a href="/portfolio-five" class="next page-numbers"><i class='bx bx-chevrons-right'></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PortfolioFiveContent'
}
</script>