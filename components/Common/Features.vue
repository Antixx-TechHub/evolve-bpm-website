<template>
    <div class="rivate-features-area">
        <div class="container">
            <div class="rivate-features-inner-box">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-sm-6">
                        <div class="rivate-features-box">
                            <div class="features-image">
                                <NuxtLink to="/services-details">
                                    <img src="~/assets/images/more-home/features/features-4.png" alt="image">
                                </NuxtLink>
                            </div>
                            <h3>
                                <NuxtLink to="/services-details">Marketing Analysis</NuxtLink>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6">
                        <div class="rivate-features-box">
                            <div class="features-image">
                                <NuxtLink to="/services-details">
                                    <img src="~/assets/images/more-home/features/features-5.png" alt="image">
                                </NuxtLink>
                            </div>
                            <h3>
                                <NuxtLink to="/services-details">Website Optimization</NuxtLink>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6">
                        <div class="rivate-features-box">
                            <div class="features-image">
                                <NuxtLink to="/services-details">
                                    <img src="~/assets/images/more-home/features/features-6.png" alt="image">
                                </NuxtLink>
                            </div>
                            <h3>
                                <NuxtLink to="/services-details">Email Marketing</NuxtLink>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod</p>
                        </div>
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