<template>
    <div class="rivate-features-area pt-100 pb-75">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-sm-6">
                    <div class="rivate-features-card">
                        <div class="features-image">
                            <NuxtLink to="/services-details">
                                <img src="~/assets/images/more-home/features/features-1.png" alt="image">
                            </NuxtLink>
                        </div>
                        <h3>
                            <NuxtLink to="/services-details">Marketing Analysis</NuxtLink>
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <NuxtLink to="/services-details" class="features-btn">
                            View More 
                            <i class="flaticon-next-button"></i>
                        </NuxtLink>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="rivate-features-card">
                        <div class="features-image">
                            <NuxtLink to="/services-details">
                                <img src="~/assets/images/more-home/features/features-2.png" alt="image">
                            </NuxtLink>
                        </div>
                        <h3>
                            <NuxtLink to="/services-details">Website Optimization</NuxtLink>
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <NuxtLink to="/services-details" class="features-btn">
                            View More 
                            <i class="flaticon-next-button"></i>
                        </NuxtLink>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="rivate-features-card">
                        <div class="features-image">
                            <NuxtLink to="/services-details">
                                <img src="~/assets/images/more-home/features/features-3.png" alt="image">
                            </NuxtLink>
                        </div>
                        <h3>
                            <NuxtLink to="/services-details">Email Marketing</NuxtLink>
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <NuxtLink to="/services-details" class="features-btn">
                            View More 
                            <i class="flaticon-next-button"></i>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Features'
}
</script>