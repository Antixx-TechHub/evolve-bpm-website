<template>
    <section class="new-main-banner-wrap-area">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="new-main-banner-wrap-content">
                        <span class="sub-title">GROWTH YOUR BUSINESS</span>
                        <h1>Digital <span>Marketing</span> Specialists</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida.</p>
                        <div class="btn-box">
                            <NuxtLink to="/contact" class="default-btn-with-radius">
                                Get Started 
                                <i class="flaticon-next-button"></i>
                            </NuxtLink>
                            <a href="tel:11234567890" class="phone-btn">
                                <i class='bx bxs-phone-call'></i> 
                                +1 (123) 456 7890
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="new-main-banner-wrap-image">
                        <img src="~/assets/images/more-home/banner/banner-3.png" alt="image">

                        <div class="wrap-circle-shape">
                            <img src="~/assets/images/more-home/banner/circle-shape.png" alt="image">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <svg style="display:none;">
            <defs>
                <filter id="stroke-text">
                    <feMorphology radius="1" operator="dilate"></feMorphology>
                    <feComposite operator="xor" in="SourceGraphic"/>
                </filter>
            </defs>
        </svg>

        <div class="new-main-banner-wrap-shape">
            <img src="~/assets/images/more-home/banner/shape-3.png" alt="image">
        </div>
    </section>
</template>

<script>
export default {
    name: 'MainBanner'
}
</script>