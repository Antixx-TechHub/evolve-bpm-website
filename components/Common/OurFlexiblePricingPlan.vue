<template>
    <div class="pricing-area bg-f9f9f9 pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Pricing</span>
                <h2>Our Flexible Pricing Plan</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-pricing-box">
                        <div class="pricing-header">
                            <div class="icon">
                                <i class="flaticon-paper-plane"></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                </div>
                            </div>
                            <h3>Starter Plan</h3>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li>10GB Bandwidth Internet</li>
                                <li>Business & Financ Analysing</li>
                                <li>25 Social Media Reviews</li>
                                <li>Customer Managemet</li>
                                <li>24/7 Support</li>
                            </ul>
                        </div>

                        <div class="price">
                            $49.99
                            <span>Per Month</span>
                        </div>

                        <NuxtLink to="/pricing" class="default-btn">Book Now</NuxtLink>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-pricing-box">
                        <div class="pricing-header">
                            <div class="icon">
                                <i class="flaticon-jigsaw"></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                </div>
                            </div>
                            <h3>Advance Plan</h3>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li>15GB Bandwidth Internet</li>
                                <li>Business & Financ Analysing</li>
                                <li>30 Social Media Reviews</li>
                                <li>Customer Managemet</li>
                                <li>24/7 Support</li>
                            </ul>
                        </div>

                        <div class="price">
                            $69.99
                            <span>Per Month</span>
                        </div>

                        <NuxtLink to="/pricing" class="default-btn">Book Now</NuxtLink>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div class="single-pricing-box">
                        <div class="pricing-header">
                            <div class="icon">
                                <i class="flaticon-diamond"></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                </div>
                            </div>
                            <h3>Premium Plan</h3>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li>50GB Bandwidth Internet</li>
                                <li>Business & Financ Analysing</li>
                                <li>35 Social Media Reviews</li>
                                <li>Customer Managemet</li>
                                <li>24/7 Support</li>
                            </ul>
                        </div>

                        <div class="price">
                            $99.99
                            <span>Per Month</span>
                        </div>

                        <NuxtLink to="/pricing" class="default-btn">Book Now</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'OurFlexiblePricingPlan'
}
</script>