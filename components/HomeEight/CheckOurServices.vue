<template>
    <div class="rivate-services-area ptb-100">
        <div class="container">
            <div class="section-title with-gradient-color">
                <span class="sub-title">SERVICES</span>
                <h2>Let’s Check Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div class="rivate-services-slides owl-carousel owl-theme">
                <carousel
                    :autoplay="true"
                    :loop="true"
                    :autoplayTimeout="7000"
                    :speed="1000"
                    :paginationEnabled="true"
                    :perPageCustom="[[0, 1], [576, 2], [768, 2], [1024, 3], [1200, 4]]"
                >
                    <slide>
                        <div class="rivate-services-card">
                            <div class="icon">
                                <i class="flaticon-megaphone"></i>
                            </div>
                            <h3>
                                <NuxtLink to="/services-details">Social Media Marketing</NuxtLink>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <NuxtLink to="/services-details" class="services-btn">View More <i class="flaticon-next-button"></i></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="rivate-services-card">
                            <div class="icon color-two">
                                <i class="flaticon-keywords"></i>
                            </div>
                            <h3>
                                <NuxtLink to="/services-details">Keyword Research</NuxtLink>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <NuxtLink to="/services-details" class="services-btn">View More <i class="flaticon-next-button"></i></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="rivate-services-card">
                            <div class="icon color-three">
                                <i class="flaticon-content-management"></i>
                            </div>
                            <h3>
                                <NuxtLink to="/services-details">Content Marketing</NuxtLink>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <NuxtLink to="/services-details" class="services-btn">View More <i class="flaticon-next-button"></i></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="rivate-services-card">
                            <div class="icon color-four">
                                <i class="flaticon-competitor"></i>
                            </div>
                            <h3>
                                <NuxtLink to="/services-details">Competitor Research</NuxtLink>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <NuxtLink to="/services-details" class="services-btn">View More <i class="flaticon-next-button"></i></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="rivate-services-card">
                            <div class="icon">
                                <i class="flaticon-megaphone"></i>
                            </div>
                            <h3>
                                <NuxtLink to="/services-details">Social Media Marketing</NuxtLink>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <NuxtLink to="/services-details" class="services-btn">View More <i class="flaticon-next-button"></i></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="rivate-services-card">
                            <div class="icon color-two">
                                <i class="flaticon-keywords"></i>
                            </div>
                            <h3>
                                <NuxtLink to="/services-details">Keyword Research</NuxtLink>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <NuxtLink to="/services-details" class="services-btn">View More <i class="flaticon-next-button"></i></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="rivate-services-card">
                            <div class="icon color-three">
                                <i class="flaticon-content-management"></i>
                            </div>
                            <h3>
                                <NuxtLink to="/services-details">Content Marketing</NuxtLink>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <NuxtLink to="/services-details" class="services-btn">View More <i class="flaticon-next-button"></i></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="rivate-services-card">
                            <div class="icon color-four">
                                <i class="flaticon-competitor"></i>
                            </div>
                            <h3>
                                <NuxtLink to="/services-details">Competitor Research</NuxtLink>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <NuxtLink to="/services-details" class="services-btn">View More <i class="flaticon-next-button"></i></NuxtLink>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>

        <div class="rivate-services-shape">
            <img src="~/assets/images/more-home/services/vector-shape.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'CheckOurServices'
}
</script>