<template>
    <div class="ds-services-area pt-100 pb-75">
        <div class="container">
            <div class="ds-section-title">
                <span>Welcome to rivate</span>
                <h2>Check our best services</h2>
                <p>Integer vel elit congue accumsan ligula placerat mi uisque tempor sapien justo sed accumsan tortor ultrices nec.</p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-6">
                    <div class="ds-services-card">
                        <div class="content">
                            <div class="icon">
                                <img src="~/assets/images/data-science/services/database.svg" alt="image">
                            </div>
                            <h3>
                                <NuxtLink to="/services-details">Data analysis</NuxtLink>
                            </h3>
                            <p>Integer vel elit congue ligula placerat mi uisque tempor saen justo sed accumsan tortor.</p>
                            <NuxtLink to="/services-details" class="services-btn">Read more <i class='flaticon-chevron'></i></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="ds-services-card">
                        <div class="content">
                            <div class="icon">
                                <img src="~/assets/images/data-science/services/automated-engineering.svg" alt="image">
                            </div>
                            <h3>
                                <NuxtLink to="/services-details">Business intelligence</NuxtLink>
                            </h3>
                            <p>Integer vel elit congue ligula placerat mi uisque tempor saen justo sed accumsan tortor.</p>
                            <NuxtLink to="/services-details" class="services-btn">Read more <i class='flaticon-chevron'></i></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="ds-services-card">
                        <div class="content">
                            <div class="icon">
                                <img src="~/assets/images/data-science/services/report.svg" alt="image">
                            </div>
                            <h3>
                                <NuxtLink to="/services-details">Machine learning</NuxtLink>
                            </h3>
                            <p>Integer vel elit congue ligula placerat mi uisque tempor saen justo sed accumsan tortor.</p>
                            <NuxtLink to="/services-details" class="services-btn">Read more <i class='flaticon-chevron'></i></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="ds-services-card">
                        <div class="content">
                            <div class="icon">
                                <img src="~/assets/images/data-science/services/code.svg" alt="image">
                            </div>
                            <h3>
                                <NuxtLink to="/services-details">Big data analysis</NuxtLink>
                            </h3>
                            <p>Integer vel elit congue ligula placerat mi uisque tempor saen justo sed accumsan tortor.</p>
                            <NuxtLink to="/services-details" class="services-btn">Read more <i class='flaticon-chevron'></i></NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Services'
}
</script>