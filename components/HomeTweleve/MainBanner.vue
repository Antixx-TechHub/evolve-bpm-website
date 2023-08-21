<template>
    <div class="ds-main-banner-area">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="ds-banner-content">
                        <h1>Data science and analytics with survey reports</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus luctus nec dolore magna ullamcorper mattis pulvinar dapibus leo aliqua.</p>
                        <ul class="btn-box">
                            <li>
                                <NuxtLink to="/contact" class="default-btn">
                                    Get started 
                                    <i class='flaticon-chevron'></i>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contact" class="default-btn">
                                    Contact us 
                                    <i class='flaticon-chevron'></i>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="ds-banner-image">
                        <img src="~/assets/images/data-science/banner/main.png" alt="image">
                    </div>
                </div>
            </div>
        </div>

        <div class="ds-banner-large-shape">
            <img src="~/assets/images/data-science/banner/large-shape.png" alt="image">
        </div>
        <div class="ds-banner-shape-1">
            <img src="~/assets/images/data-science/banner/shape1.png" alt="image">
        </div>
        <div class="ds-banner-shape-2">
            <img src="~/assets/images/data-science/banner/shape2.png" alt="image">
        </div>
        <div class="ds-banner-shape-3">
            <img src="~/assets/images/data-science/banner/shape3.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainBanner'
}
</script>