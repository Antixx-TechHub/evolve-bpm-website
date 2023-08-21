<template>
    <div class="it-blog-area pt-100 pb-75">
        <div class="container">
            <div class="startup-it-agency-title">
                <span>Our blog</span>
                <h2>Read our latest insights</h2>
                <p>Lorem ipsum dolor sit amet consectetur nod adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm andhn dolore magna labore.</p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="it-blog-card">
                        <div class="blog-image">
                            <NuxtLink to="/blog-details-one">
                                <img src="~/assets/images/startup-it-agency/blog/blog1.jpg" alt="image">
                            </NuxtLink>
                        </div>
                        <div class="blog-content">
                            <div class="date">
                                <b>12</b>
                                <span>April</span>
                            </div>
                            <ul class="meta">
                                <li><i class='bx bx-user'></i> By <a href="#">admin</a></li>
                                <li>/</li>
                                <li><i class='bx bx-message-rounded-dots'></i> No comment</li>
                            </ul>
                            <h3>
                                <NuxtLink to="/blog-details-one">How is technology working with new things?</NuxtLink>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt labore et dolore magna aliqua minim.</p>
                            <NuxtLink to="/blog-details-one" class="blog-btn">Read more</NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="it-blog-card">
                        <div class="blog-image">
                            <NuxtLink to="/blog-details-one"><img src="~/assets/images/startup-it-agency/blog/blog2.jpg" alt="image"></NuxtLink>
                        </div>
                        <div class="blog-content">
                            <div class="date">
                                <b>13</b>
                                <span>April</span>
                            </div>
                            <ul class="meta">
                                <li><i class='bx bx-user'></i> By <a href="#">admin</a></li>
                                <li>/</li>
                                <li><i class='bx bx-message-rounded-dots'></i> No comment</li>
                            </ul>
                            <h3>
                                <NuxtLink to="/blog-details-one">Top 10 important tips IT services & technology</NuxtLink>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt labore et dolore magna aliqua minim.</p>
                            <NuxtLink to="/blog-details-one" class="blog-btn">Read more</NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="it-blog-card">
                        <div class="blog-image">
                            <NuxtLink to="/blog-details-one"><img src="~/assets/images/startup-it-agency/blog/blog3.jpg" alt="image"></NuxtLink>
                        </div>
                        <div class="blog-content">
                            <div class="date">
                                <b>14</b>
                                <span>April</span>
                            </div>
                            <ul class="meta">
                                <li><i class='bx bx-user'></i> By <a href="#">admin</a></li>
                                <li>/</li>
                                <li><i class='bx bx-message-rounded-dots'></i> No comment</li>
                            </ul>
                            <h3>
                                <NuxtLink to="/blog-details-one">New device invention for the digital platform</NuxtLink>
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
    name: 'OurBlog'
}
</script>