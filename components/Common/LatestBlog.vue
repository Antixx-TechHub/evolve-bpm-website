<template>
    <div class="blog-area bg-f9f9f9 pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Our Blog</span>
                <h2>Our Latest Media</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="image">
                            <NuxtLink to="/blog-details-one" class="d-block">
                                <img src="~/assets/images/blog/blog-img1.jpg" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="content">
                            <h3><NuxtLink to="/blog-details-one">Digital Marketing Agency Blogs You Should Read</NuxtLink></h3>
                            <div class="d-flex align-items-center">
                                <img src="~/assets/images/user1.jpg" alt="image">
                                <div class="info">
                                    <h5>David Smith</h5>
                                    <span>Jun 21, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="image">
                            <NuxtLink to="/blog-details-one" class="d-block">
                                <img src="~/assets/images/blog/blog-img2.jpg" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="content">
                            <h3><NuxtLink to="/blog-details-one">Digital Marketing Strategies for Lead Generation</NuxtLink></h3>
                            <div class="d-flex align-items-center">
                                <img src="~/assets/images/user2.jpg" alt="image">
                                <div class="info">
                                    <h5>Sarah Taylor</h5>
                                    <span>Jun 20, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                    <div class="single-blog-post">
                        <div class="image">
                            <NuxtLink to="/blog-details-one" class="d-block">
                                <img src="~/assets/images/blog/blog-img3.jpg" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="content">
                            <h3><NuxtLink to="/blog-details-one">Agencies Can Successfully Recover From COVID?</NuxtLink></h3>
                            <div class="d-flex align-items-center">
                                <img src="~/assets/images/user3.jpg" alt="image">
                                <div class="info">
                                    <h5>Steven Gibson</h5>
                                    <span>Jun 19, 2021</span>
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