<template>
    <div class="about-area">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="about-image">
                        <img src="~/assets/images/about-img1.jpg" alt="image">
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="about-content">
                        <div class="content">
                            <span class="sub-title">About Us</span>
                            <h2>Enjoy Full-Service Digital Marketing Expertise</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <ul class="funfacts-list">
                                <li>
                                    <div class="list">
                                        <i class="flaticon-menu-1"></i>
                                        <h3>376</h3>
                                        <p>Completed projects</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="list">
                                        <i class="flaticon-web-settings"></i>
                                        <h3>7548</h3>
                                        <p>Working hours were spent</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="list">
                                        <i class="flaticon-conversation"></i>
                                        <h3>350</h3>
                                        <p>Expert team members</p>
                                    </div>
                                </li>
                            </ul>
                            <NuxtLink to="/about-one" class="default-btn">More About Us</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AboutUs'
}
</script>