<template>
    <div class="rivate-case-studies-area ptb-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="rivate-case-studies-section-content">
                        <span>CASE STUDIES</span>
                        <h3>Check of Our Some Recent Works & Case Studies</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>

                <div class="col-lg-8 col-md-12">
                    <div class="rivate-case-studies-slides owl-carousel owl-theme">
                        <carousel
                            :autoplay="true"
                            :loop="true"
                            :autoplayTimeout="7000"
                            :speed="1000"
                            :paginationEnabled="false"
                            :perPageCustom="[[0, 1], [576, 2], [768, 2], [1024, 2], [1200, 3]]"
                            :perPage="1"
                            :navigationEnabled="true"
                            navigationNextLabel="<i class='flaticon-chevron'></i>"
                            navigationPrevLabel="<i class='flaticon-back'></i>"
                        >
                            <slide>
                                <div class="rivate-case-studies-card">
                                    <NuxtLink to="/portfolio-details">
                                        <img src="~/assets/images/more-home/case-studies/case-studies-1.jpg" alt="image">
                                    </NuxtLink>

                                    <div class="content">
                                        <h3>
                                            <NuxtLink to="/portfolio-details">Data Scientist</NuxtLink>
                                        </h3>
                                        <div class="icon">
                                            <NuxtLink to="/portfolio-details">
                                                <i class="flaticon-next-button"></i>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </slide>
                            <slide>
                                <div class="rivate-case-studies-card">
                                    <NuxtLink to="/portfolio-details">
                                        <img src="~/assets/images/more-home/case-studies/case-studies-2.jpg" alt="image">
                                    </NuxtLink>

                                    <div class="content">
                                        <h3>
                                            <NuxtLink to="/portfolio-details">Data Analysis</NuxtLink>
                                        </h3>
                                        <div class="icon">
                                            <NuxtLink to="/portfolio-details">
                                                <i class="flaticon-next-button"></i>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </slide>
                            <slide>
                                <div class="rivate-case-studies-card">
                                    <NuxtLink to="/portfolio-details">
                                        <img src="~/assets/images/more-home/case-studies/case-studies-3.jpg" alt="image">
                                    </NuxtLink>

                                    <div class="content">
                                        <h3>
                                            <NuxtLink to="/portfolio-details">Detection Project</NuxtLink>
                                        </h3>
                                        <div class="icon">
                                            <NuxtLink to="/portfolio-details">
                                                <i class="flaticon-next-button"></i>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </slide>
                            <slide>
                                <div class="rivate-case-studies-card">
                                    <NuxtLink to="/portfolio-details">
                                        <img src="~/assets/images/more-home/case-studies/case-studies-1.jpg" alt="image">
                                    </NuxtLink>

                                    <div class="content">
                                        <h3>
                                            <NuxtLink to="/portfolio-details">Data Scientist</NuxtLink>
                                        </h3>
                                        <div class="icon">
                                            <NuxtLink to="/portfolio-details">
                                                <i class="flaticon-next-button"></i>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </slide>
                            <slide>
                                <div class="rivate-case-studies-card">
                                    <NuxtLink to="/portfolio-details">
                                        <img src="~/assets/images/more-home/case-studies/case-studies-2.jpg" alt="image">
                                    </NuxtLink>

                                    <div class="content">
                                        <h3>
                                            <NuxtLink to="/portfolio-details">Data Analysis</NuxtLink>
                                        </h3>
                                        <div class="icon">
                                            <NuxtLink to="/portfolio-details">
                                                <i class="flaticon-next-button"></i>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </slide>
                            <slide>
                                <div class="rivate-case-studies-card">
                                    <NuxtLink to="/portfolio-details">
                                        <img src="~/assets/images/more-home/case-studies/case-studies-3.jpg" alt="image">
                                    </NuxtLink>

                                    <div class="content">
                                        <h3>
                                            <NuxtLink to="/portfolio-details">Detection Project</NuxtLink>
                                        </h3>
                                        <div class="icon">
                                            <NuxtLink to="/portfolio-details">
                                                <i class="flaticon-next-button"></i>
                                            </NuxtLink>
                                        </div>
                                    </div>
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
export default {
    name: 'CaseStudies'
}
</script>