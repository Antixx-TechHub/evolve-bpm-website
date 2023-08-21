<template>
    <div class="ds-about-area pb-100">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-5 col-md-12">
                    <div class="ds-about-image">
                        <img src="~/assets/images/data-science/about/about.png" alt="image">
                    </div>
                </div>

                <div class="col-lg-7 col-md-12">
                    <div class="ds-about-content">
                        <span class="sub">About rivate</span>
                        <h3>We bring the power of data science <span>& analytics to business</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit illo ducimus vero vero corporis voluptates beatae pariatur laudantium fugiat illum deserunt nostrum aliquid quisquam ess voluptatibus quia velit numquam esse porro ipsum dolor sit amet consectetur.</p>
                        <div class="row justify-content-center">
                            <div class="col-lg-6 col-sm-6">
                                <div class="inner-card">
                                    <div class="icon">
                                        <img src="~/assets/images/data-science/about/icon1.svg" alt="image">
                                    </div>
                                    <h4>100% <span>Nature friendly</span></h4>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-6">
                                <div class="inner-card">
                                    <div class="icon">
                                        <img src="~/assets/images/data-science/about/icon2.svg" alt="image">
                                    </div>
                                    <h4>World <span>express services</span></h4>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-6 col-sm-6">
                                <ul class="list">
                                    <li><i class='bx bx-check-circle'></i> Collect every data</li>
                                    <li><i class='bx bx-check-circle'></i> Import data for real-time</li>
                                    <li><i class='bx bx-check-circle'></i> Travel & destinations</li>
                                </ul>
                            </div>

                            <div class="col-lg-6 col-sm-6">
                                <ul class="list">
                                    <li><i class='bx bx-check-circle'></i> Health care & medicine</li>
                                    <li><i class='bx bx-check-circle'></i> Financial & banking</li>
                                    <li><i class='bx bx-check-circle'></i> Advertise & digital marketing</li>
                                </ul>
                            </div>
                        </div>
                        <div class="about-btn">
                            <NuxtLink to="/about-one" class="default-btn">
                                Read more 
                                <i class='flaticon-chevron'></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="ds-about-shape">
            <img src="~/assets/images/data-science/about/shape.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>