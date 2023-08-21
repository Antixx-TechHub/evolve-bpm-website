<template>
    <div class="new-main-banner-area">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="new-main-banner-content">
                        <span class="sub-title">GROWTH YOUR BUSINESS</span>
                        <h1>We Provide Best Digital Marketing Solutions</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida.</p>
                        <div class="btn-box ">
                            <NuxtLink to="/contact" class="default-btn-with-radius">
                                Get Started 
                                <i class="flaticon-next-button"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="new-main-banner-image">
                        <img src="~/assets/images/more-home/banner/banner.png" alt="image">
                    </div>
                </div>
            </div>
        </div>

        <div class="new-main-banner-shape-1">
            <img src="~/assets/images/more-home/banner/shape-1.png" alt="image">
        </div>
        <div class="new-main-banner-shape-2">
            <img src="~/assets/images/more-home/banner/shape-2.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainBanner'
}
</script>