<template>
    <div class="ds-blog-area pt-100 pb-75">
        <div class="container">
            <div class="ds-section-title">
                <span>Blog</span>
                <h2>Read our latest posts</h2>
                <p>Integer vel elit congue accumsan ligula placerat mi uisque tempor sapien justo sed accumsan tortor ultrices nec.</p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="ds-blog-card">
                        <div class="blog-image">
                            <NuxtLink to="/blog-details-one">
                                <img src="~/assets/images/data-science/blog/blog1.jpg" alt="image">
                            </NuxtLink>
                            <div class="date">
                                <b>12</b>
                                <span>May</span>
                            </div>
                        </div>
                        <div class="blog-content">
                            <ul class="meta">
                                <li><i class='bx bx-user'></i> By <a href="#">admin</a></li>
                                <li>/</li>
                                <li><i class='bx bx-message-rounded-dots'></i> No comment</li>
                            </ul>
                            <h3>
                                <NuxtLink to="/blog-details-one">Making peace with the feast or famine of freelancing</NuxtLink>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt labore et dolore magna aliqua minim.</p>
                            <NuxtLink to="/blog-details-one" class="blog-btn">Read more</NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="ds-blog-card">
                        <div class="blog-image">
                            <NuxtLink to="/blog-details-one"><img src="~/assets/images/data-science/blog/blog2.jpg" alt="image"></NuxtLink>
                            <div class="date">
                                <b>13</b>
                                <span>May</span>
                            </div>
                        </div>
                        <div class="blog-content">
                            <ul class="meta">
                                <li><i class='bx bx-user'></i> By <a href="#">admin</a></li>
                                <li>/</li>
                                <li><i class='bx bx-message-rounded-dots'></i> No comment</li>
                            </ul>
                            <h3>
                                <NuxtLink to="/blog-details-one">Instagram feed add to your WordPress site</NuxtLink>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt labore et dolore magna aliqua minim.</p>
                            <NuxtLink to="/blog-details-one" class="blog-btn">Read more</NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="ds-blog-card">
                        <div class="blog-image">
                            <NuxtLink to="/blog-details-one"><img src="~/assets/images/data-science/blog/blog3.jpg" alt="image"></NuxtLink>
                            <div class="date">
                                <b>14</b>
                                <span>May</span>
                            </div>
                        </div>
                        <div class="blog-content">
                            <ul class="meta">
                                <li><i class='bx bx-user'></i> By <a href="#">admin</a></li>
                                <li>/</li>
                                <li><i class='bx bx-message-rounded-dots'></i> No comment</li>
                            </ul>
                            <h3>
                                <NuxtLink to="/blog-details-one">I used the web for a day on a 50 mb budget</NuxtLink>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt labore et dolore magna aliqua minim.</p>
                            <NuxtLink to="/blog-details-one" class="blog-btn">Read more</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blog'
}
</script>