<template>
    <div class="boxes-area pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-boxes-box">
                        <div class="icon">
                            <i class="flaticon-research"></i>
                            <div class="circles-box">
                                <div class="circle-one"></div>
                            </div>
                        </div>
                        <h3><NuxtLink to="/services-details">Marketing Analysis</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <NuxtLink to="/services-details" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Learn More <i class="right-icon flaticon-next-button"></i></NuxtLink>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-boxes-box">
                        <div class="icon">
                            <i class="flaticon-speed"></i>
                            <div class="circles-box">
                                <div class="circle-one"></div>
                            </div>
                        </div>
                        <h3><NuxtLink to="/services-details">Website Optimization</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <NuxtLink to="/services-details" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Learn More <i class="right-icon flaticon-next-button"></i></NuxtLink>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div class="single-boxes-box">
                        <div class="icon">
                            <i class="flaticon-email-marketing"></i>
                            <div class="circles-box">
                                <div class="circle-one"></div>
                            </div>
                        </div>
                        <h3><NuxtLink to="/services-details">Email Marketing</NuxtLink></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <NuxtLink to="/services-details" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Learn More <i class="right-icon flaticon-next-button"></i></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ServicesContant'
}
</script>