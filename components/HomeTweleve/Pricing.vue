<template>
    <div class="ds-pricing-area pt-100 pb-75">
        <div class="container">
            <div class="ds-section-title">
                <span>Pricing</span>
                <h2>Choose your pricing plan</h2>
                <p>Integer vel elit congue accumsan ligula placerat mi uisque tempor sapien justo sed accumsan tortor ultrices nec.</p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="ds-pricing-card">
                        <h3>Basic plan</h3>
                        <div class="price">$70 <span> / Month</span></div>
                        <ul class="list">
                            <li class="d-flex align-items-center justify-content-between">
                                Managed analytics
                                <i class='bx bx-check'></i>
                            </li>
                            <li class="d-flex align-items-center justify-content-between">
                                Business intelligence
                                <i class='bx bx-check'></i>
                            </li>
                            <li class="d-flex align-items-center justify-content-between">
                                International payments
                                <i class='bx bx-check'></i>
                            </li>
                            <li class="d-flex align-items-center justify-content-between">
                                Data management
                                <i class='bx bx-x'></i>
                            </li>
                            <li class="d-flex align-items-center justify-content-between">
                                Social integration
                                <i class='bx bx-x'></i>
                            </li>
                            <li class="d-flex align-items-center justify-content-between">
                                Relevant app content
                                <i class='bx bx-x'></i>
                            </li>
                        </ul>
                        <div class="pricing-btn">
                            <NuxtLink to="/contact" class="default-btn">Get start now</NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="ds-pricing-card">
                        <h3>Medium plan</h3>
                        <div class="price">$89 <span> / Month</span></div>
                        <ul class="list">
                            <li class="d-flex align-items-center justify-content-between">
                                Managed analytics
                                <i class='bx bx-check'></i>
                            </li>
                            <li class="d-flex align-items-center justify-content-between">
                                Business intelligence
                                <i class='bx bx-check'></i>
                            </li>
                            <li class="d-flex align-items-center justify-content-between">
                                International payments
                                <i class='bx bx-check'></i>
                            </li>
                            <li class="d-flex align-items-center justify-content-between">
                                Data management
                                <i class='bx bx-check'></i>
                            </li>
                            <li class="d-flex align-items-center justify-content-between">
                                Social integration
                                <i class='bx bx-x'></i>
                            </li>
                            <li class="d-flex align-items-center justify-content-between">
                                Relevant app content
                                <i class='bx bx-x'></i>
                            </li>
                        </ul>
                        <div class="pricing-btn">
                            <NuxtLink to="/contact" class="default-btn">Get start now</NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="ds-pricing-card">
                        <h3>Advance plan</h3>
                        <div class="price">$100 <span> / Month</span></div>
                        <ul class="list">
                            <li class="d-flex align-items-center justify-content-between">
                                Managed analytics
                                <i class='bx bx-check'></i>
                            </li>
                            <li class="d-flex align-items-center justify-content-between">
                                Business intelligence
                                <i class='bx bx-check'></i>
                            </li>
                            <li class="d-flex align-items-center justify-content-between">
                                International payments
                                <i class='bx bx-check'></i>
                            </li>
                            <li class="d-flex align-items-center justify-content-between">
                                Data management
                                <i class='bx bx-check'></i>
                            </li>
                            <li class="d-flex align-items-center justify-content-between">
                                Social integration
                                <i class='bx bx-check'></i>
                            </li>
                            <li class="d-flex align-items-center justify-content-between">
                                Relevant app content
                                <i class='bx bx-check'></i>
                            </li>
                        </ul>
                        <div class="pricing-btn">
                            <NuxtLink to="/contact" class="default-btn">Get start now</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pricing'
}
</script>