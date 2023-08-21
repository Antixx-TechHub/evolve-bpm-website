<template>
    <div class="it-services-area ptb-100">
        <div class="container">
            <div class="startup-it-agency-title style-two">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 col-md-12">
                        <div class="div">
                            <span>Our services</span>
                            <h2>What services we provide to our customers business</h2>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. quis adipisicing elit nostrud exercitation ullamco laboris.</p>
                    </div>
                </div>
            </div>

            <div class="it-services-slides">
                <carousel
                    :autoplay="true"
                    :loop="true"
                    :autoplayTimeout="7000"
                    :speed="1000"
                    :paginationEnabled="true"
                    :perPageCustom="[[0, 1], [576, 2], [768, 2], [1024, 3], [1200, 4]]"
                >
                    <slide 
                        v-for="slide in carouselItems" 
                        :key="slide.id"
                    >
                        <div class="it-services-card">
                            <div class="services-image">
                                <NuxtLink to="/services-details">
                                    <img :src="slide.image" alt="image">
                                </NuxtLink>
                            </div>
                            <div class="services-content">
                                <div class="icon">
                                    <img :src="slide.icon" alt="image">
                                </div>
                                <h3>
                                    <NuxtLink to="/services-details">
                                        {{slide.title}}
                                    </NuxtLink>
                                </h3>
                                <p>{{slide.desc}}</p>
                                <NuxtLink to="/services-details" class="services-btn">Read more</NuxtLink>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>

        <div class="it-services-shape">
            <img src="~/assets/images/startup-it-agency/services/shape.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Services',
    data: () => ({
        carouselItems: [
            {
                id: 1,
                image: require('~/assets/images/startup-it-agency/services/services1.jpg'),
                icon: require('~/assets/images/startup-it-agency/services/icon1.svg'),
                title: 'Cloud compuiting',
                desc: 'Proin gravida nibh velit auctor aliquet enean sollicitudin bibendum auctor nisi elit.',
            },
            {
                id: 2,
                image: require('~/assets/images/startup-it-agency/services/services2.jpg'),
                icon: require('~/assets/images/startup-it-agency/services/icon2.svg'),
                title: 'Corporate finance',
                desc: 'Proin gravida nibh velit auctor aliquet enean sollicitudin bibendum auctor nisi elit.',
            },
            {
                id: 3,
                image: require('~/assets/images/startup-it-agency/services/services3.jpg'),
                icon: require('~/assets/images/startup-it-agency/services/icon3.svg'),
                title: 'Manage investment',
                desc: 'Proin gravida nibh velit auctor aliquet enean sollicitudin bibendum auctor nisi elit.',
            },
            {
                id: 4,
                image: require('~/assets/images/startup-it-agency/services/services4.jpg'),
                icon: require('~/assets/images/startup-it-agency/services/icon4.svg'),
                title: 'Business planning',
                desc: 'Proin gravida nibh velit auctor aliquet enean sollicitudin bibendum auctor nisi elit.',
            },
            {
                id: 5,
                image: require('~/assets/images/startup-it-agency/services/services2.jpg'),
                icon: require('~/assets/images/startup-it-agency/services/icon2.svg'),
                title: 'Corporate finance',
                desc: 'Proin gravida nibh velit auctor aliquet enean sollicitudin bibendum auctor nisi elit.',
            },
            {
                id: 6,
                image: require('~/assets/images/startup-it-agency/services/services3.jpg'),
                icon: require('~/assets/images/startup-it-agency/services/icon3.svg'),
                title: 'Manage investment',
                desc: 'Proin gravida nibh velit auctor aliquet enean sollicitudin bibendum auctor nisi elit.',
            },
        ],
    }),
}
</script>