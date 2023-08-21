<template>
    <div class="testimonials-area">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-7 col-md-12">
                    <div class="testimonials-content">
                        <span class="sub-title">Testimonials</span>
                        <h2>What Our Clients Are Saying?</h2>

                        <div class="testimonials-slides owl-carousel owl-theme">
                            <carousel
                                :autoplay = "true"
                                :loop = "true"
                                :autoplayTimeout="7000"
                                :speed="1000"
                                :paginationEnabled = "true"
                                :perPageCustom = "[[0, 1]]"
                            >
                                <slide>
                                    <div class="single-testimonials-item">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                        <div class="client-info">
                                            <div class="d-flex align-items-center">
                                                <img src="~/assets/images/user1.jpg" alt="image">
                                                <div class="title">
                                                    <h3>John Smith</h3>
                                                    <span>Python Developer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </slide>

                                <slide>
                                    <div class="single-testimonials-item">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                        <div class="client-info">
                                            <div class="d-flex align-items-center">
                                                <img src="~/assets/images/user2.jpg" alt="image">
                                                <div class="title">
                                                    <h3>Sarah Taylor</h3>
                                                    <span>Web Developer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </slide>

                                <slide>
                                    <div class="single-testimonials-item">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                        <div class="client-info">
                                            <div class="d-flex align-items-center">
                                                <img src="~/assets/images/user3.jpg" alt="image">
                                                <div class="title">
                                                    <h3>James Anderson</h3>
                                                    <span>Web Designer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </slide>
                            </carousel>
                        </div>
                    </div>
                </div>

                <div class="col-lg-5 col-md-12">
                    <div class="testimonials-image">
                        <img src="~/assets/images/testimonials-img.jpg" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OurClientsAreSaying'
    }
</script>