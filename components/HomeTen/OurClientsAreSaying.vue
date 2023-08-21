<template>
    <div class="rivate-clients-area bg-F7F8FF ptb-100">
        <div class="container">
            <div class="section-title with-gradient-color">
                <span class="sub-title">TESTIMONIALS</span>
                <h2>What Our Clients Are Saying?</h2>
            </div>

            <div class="rivate-clients-slides owl-carousel owl-theme">
                <carousel
                    :autoplay="true"
                    :loop="true"
                    :autoplayTimeout="7000"
                    :speed="1000"
                    :paginationEnabled="true"
                    :perPageCustom="[[0, 1], [576, 2], [768, 2], [1024, 3], [1200, 3]]"
                >
                    <slide>
                        <div class="rivate-clients-card">
                            <div class="client-info">
                                <img src="~/assets/images/more-home/clients/clients-1.png" alt="image">
                                <div class="title">
                                    <h3>John Smith</h3>
                                    <span>Python Developer</span>
                                </div>
                            </div>
                            <p>“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula donec rutrum congue leo eget malesuada.”</p>
                            <ul class="rating">
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                            </ul>
                        </div>
                    </slide>
                    <slide>
                        <div class="rivate-clients-card">
                            <div class="client-info">
                                <img src="~/assets/images/more-home/clients/clients-2.png" alt="image">
                                <div class="title">
                                    <h3>Sarah Taylor</h3>
                                    <span>Marketing Lead</span>
                                </div>
                            </div>
                            <p>“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula donec rutrum congue leo eget malesuada.”</p>
                            <ul class="rating">
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                            </ul>
                        </div>
                    </slide>
                    <slide>
                        <div class="rivate-clients-card">
                            <div class="client-info">
                                <img src="~/assets/images/more-home/clients/clients-3.png" alt="image">
                                <div class="title">
                                    <h3>David Warner</h3>
                                    <span>Support</span>
                                </div>
                            </div>
                            <p>“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula donec rutrum congue leo eget malesuada.”</p>
                            <ul class="rating">
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                            </ul>
                        </div>
                    </slide>
                    <slide>
                        <div class="rivate-clients-card">
                            <div class="client-info">
                                <img src="~/assets/images/more-home/clients/clients-1.png" alt="image">
                                <div class="title">
                                    <h3>John Smith</h3>
                                    <span>Python Developer</span>
                                </div>
                            </div>
                            <p>“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula donec rutrum congue leo eget malesuada.”</p>
                            <ul class="rating">
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                            </ul>
                        </div>
                    </slide>
                    <slide>
                        <div class="rivate-clients-card">
                            <div class="client-info">
                                <img src="~/assets/images/more-home/clients/clients-2.png" alt="image">
                                <div class="title">
                                    <h3>Sarah Taylor</h3>
                                    <span>Marketing Lead</span>
                                </div>
                            </div>
                            <p>“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula donec rutrum congue leo eget malesuada.”</p>
                            <ul class="rating">
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                            </ul>
                        </div>
                    </slide>
                    <slide>
                        <div class="rivate-clients-card">
                            <div class="client-info">
                                <img src="~/assets/images/more-home/clients/clients-3.png" alt="image">
                                <div class="title">
                                    <h3>David Warner</h3>
                                    <span>Support</span>
                                </div>
                            </div>
                            <p>“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula donec rutrum congue leo eget malesuada.”</p>
                            <ul class="rating">
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                            </ul>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurClientsAreSaying'
}
</script>