<template>
    <div class="blog-area bg-f9f9f9 ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="row">
                        <div class="col-lg-12 col-md-6">
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
    
                        <div class="col-lg-12 col-md-6">
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
    
                        <div class="col-lg-12 col-md-6">
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
    
                        <div class="col-lg-12 col-md-6">
                            <div class="single-blog-post">
                                <div class="image">
                                    <NuxtLink to="/blog-details-one" class="d-block">
                                        <img src="~/assets/images/blog/blog-img4.jpg" alt="image">
                                    </NuxtLink>
                                </div>
    
                                <div class="content">
                                    <h3><NuxtLink to="/blog-details-one">Preparing E-Commerce for the Post-COVID Bounce Back</NuxtLink></h3>
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
    
                        <div class="col-lg-12 col-md-12">
                            <div class="pagination-area text-center">
                                <a href="/blog-four" class="prev page-numbers"><i class='bx bx-chevrons-left'></i></a>
                                <span class="page-numbers current" aria-current="page">1</span>
                                <a href="/blog-four" class="page-numbers">2</a>
                                <a href="/blog-four" class="page-numbers">3</a>
                                <a href="/blog-four" class="page-numbers">4</a>
                                <a href="/blog-four" class="next page-numbers"><i class='bx bx-chevrons-right'></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <BlogSidebar />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogSidebar from '../Common/BlogSidebar'

export default {
    name: 'BlogFourContent',
        components: {
            BlogSidebar,
        }
}
</script>