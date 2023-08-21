<template>
    <div class="rivate-about-area pb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="rivate-about-image">
                        <img src="~/assets/images/more-home/about/about-3.png" alt="image">

                        <div class="wrap-content">
                            <p>“Praesent sapien massa convallis a pellentesque nec egestas non nisi.”</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="rivate-about-content">
                        <span>ABOUT US</span>
                        <h3>Enjoy Full-Service Digital Marketing Expertise</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                        <ul class="about-list">
                            <li>
                                <span>376</span> Completed Projects
                            </li>
                            <li>
                                <span>7548</span> Working Hours Were Spent
                            </li>
                            <li>
                                <span>570</span> Expert Team Members
                            </li>
                        </ul>
                        <div class="about-btn">
                            <NuxtLink to="/about-one" class="default-btn-with-radius">
                                More About Us 
                                <i class="flaticon-next-button"></i>
                            </NuxtLink>
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