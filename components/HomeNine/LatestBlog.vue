<template>
    <div class="rivate-blog-area pt-100 pb-75">
        <div class="container">
            <div class="section-title with-gradient-color">
                <span class="sub-title">OUR BLOG</span>
                <h2>Our Latest Media</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="rivate-blog-card">
                        <div class="blog-image">
                            <NuxtLink to="/blog-details-one">
                                <img src="~/assets/images/more-home/blog/blog-4.jpg" alt="image">
                            </NuxtLink>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <NuxtLink to="/blog-details-one">
                                    Digital Marketing Agency Blogs You Should Read
                                </NuxtLink>
                            </h3>

                            <div class="blog-info d-flex align-items-center">
                                <img src="~/assets/images/more-home/blog/image-1.png" alt="image">
                                <div class="info">
                                    <h5>Claris Collins</h5>
                                </div>
                                <div class="info-date">
                                    <span><i class='bx bxs-calendar'></i> January 20, 2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="rivate-blog-card">
                        <div class="blog-image">
                            <NuxtLink to="/blog-details-one">
                                <img src="~/assets/images/more-home/blog/blog-5.jpg" alt="image">
                            </NuxtLink>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <NuxtLink to="/blog-details-one">
                                    Digital Marketing Strategies For Lead Generation
                                </NuxtLink>
                            </h3>

                            <div class="blog-info d-flex align-items-center">
                                <img src="~/assets/images/more-home/blog/image-2.png" alt="image">
                                <div class="info">
                                    <h5>Adam Moody</h5>
                                </div>
                                <div class="info-date">
                                    <span><i class='bx bxs-calendar'></i> January 20, 2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="rivate-blog-card">
                        <div class="blog-image">
                            <NuxtLink to="/blog-details-one">
                                <img src="~/assets/images/more-home/blog/blog-6.jpg" alt="image">
                            </NuxtLink>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <NuxtLink to="/blog-details-one">
                                    Agencies Can Successfully Recover From COVID?
                                </NuxtLink>
                            </h3>

                            <div class="blog-info d-flex align-items-center">
                                <img src="~/assets/images/more-home/blog/image-3.png" alt="image">
                                <div class="info">
                                    <h5>Melissa Todd</h5>
                                </div>
                                <div class="info-date">
                                    <span><i class='bx bxs-calendar'></i> January 20, 2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LatestBlog'
}
</script>