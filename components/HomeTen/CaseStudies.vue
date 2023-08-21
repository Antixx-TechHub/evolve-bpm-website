<template>
    <div class="rivate-case-studies-area-without-color ptb-100">
        <div class="container">
            <div class="section-title with-gradient-color">
                <span class="sub-title">CASE STUDIES</span>
                <h2>Check of Our Some Recent Works & Case Studies</h2>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-6">
                    <div class="rivate-case-studies-card with-style-two">
                        <NuxtLink to="/portfolio-details">
                            <img src="~/assets/images/more-home/case-studies/case-studies-1.jpg" alt="image">
                        </NuxtLink>

                        <div class="content">
                            <h3>
                                <NuxtLink to="/portfolio-details">Data Scientist</NuxtLink>
                            </h3>
                            <div class="icon">
                                <NuxtLink to="/portfolio-details"><i class="flaticon-next-button"></i></NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="rivate-case-studies-card with-style-two">
                        <NuxtLink to="/portfolio-details">
                            <img src="~/assets/images/more-home/case-studies/case-studies-2.jpg" alt="image">
                        </NuxtLink>

                        <div class="content">
                            <h3>
                                <NuxtLink to="/portfolio-details">Data Analysis</NuxtLink>
                            </h3>
                            <div class="icon">
                                <NuxtLink to="/portfolio-details"><i class="flaticon-next-button"></i></NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="rivate-case-studies-card with-style-two">
                        <NuxtLink to="/portfolio-details">
                            <img src="~/assets/images/more-home/case-studies/case-studies-3.jpg" alt="image">
                        </NuxtLink>

                        <div class="content">
                            <h3>
                                <NuxtLink to="/portfolio-details">Detection Project</NuxtLink>
                            </h3>
                            <div class="icon">
                                <NuxtLink to="/portfolio-details"><i class="flaticon-next-button"></i></NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="rivate-case-studies-card with-style-two">
                        <NuxtLink to="/portfolio-details">
                            <img src="~/assets/images/more-home/case-studies/case-studies-4.jpg" alt="image">
                        </NuxtLink>

                        <div class="content">
                            <h3>
                                <NuxtLink to="/portfolio-details">Benefits Research</NuxtLink>
                            </h3>
                            <div class="icon">
                                <NuxtLink to="/portfolio-details"><i class="flaticon-next-button"></i></NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="rivate-case-studies-bottom-text">
            <NuxtLink to="/portfolio-one">See All Case Studies</NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CaseStudies'
}
</script>