<template>
    <div class="case-study-area pb-100">
        <div class="container">
            <div class="startup-it-agency-title style-two">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 col-md-12">
                        <div class="div">
                            <span>Case study</span>
                            <h2>Introduce our projects and check recent work here</h2>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. quis adipisicing elit nostrud exercitation ullamco laboris.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="case-study-slides">
                <carousel
                    :autoplay="true"
                    :loop="true"
                    :autoplayTimeout="7000"
                    :speed="1000"
                    :paginationEnabled="true"
                    :perPageCustom="[[0, 1], [576, 1], [768, 2], [1024, 3], [1200, 4], [1200, 5]]"
                >
                    <slide 
                        v-for="slide in carouselItems" 
                        :key="slide.id"
                    >
                        <div class="case-study-card">
                            <div class="case-study-image">
                                <NuxtLink :to="'/case-studies-details/' + casestudy.attributes.slug" class="d-block">
                                    <img :src="casestudy.attributes.image.data.attributes.url" alt="blog">
                                </NuxtLink>
                            </div>
                            <div class="case-study-content">
                                <span>{{slide.tag}}</span>
                                <h3>
                                    <NuxtLink to="/case-studies-details">{{slide.title}}</NuxtLink>
                                </h3>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CaseStudy',
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        carouselItems: [
            {
                id: 1,
                image: require('~/assets/images/startup-it-agency/case-study/case-study1.jpg'),
                tag: 'Marketing / Design',
                title: 'Web development',
            },
            {
                id: 2,
                image: require('~/assets/images/startup-it-agency/case-study/case-study2.jpg'),
                tag: 'Ideas / Design',
                title: 'Smart vision',
            },
            {
                id: 3,
                image: require('~/assets/images/startup-it-agency/case-study/case-study3.jpg'),
                tag: 'Marketing / Design',
                title: 'Virtual reality',
            },
            {
                id: 4,
                image: require('~/assets/images/startup-it-agency/case-study/case-study4.jpg'),
                tag: 'Ideas / Design',
                title: 'Tech solutions',
            },
            {
                id: 5,
                image: require('~/assets/images/startup-it-agency/case-study/case-study5.jpg'),
                tag: 'Marketing / Design',
                title: 'Platform intergation',
            },
            {
                id: 6,
                image: require('~/assets/images/startup-it-agency/case-study/case-study2.jpg'),
                tag: 'Ideas / Design',
                title: 'Smart vision',
            },
            {
                id: 7,
                image: require('~/assets/images/startup-it-agency/case-study/case-study3.jpg'),
                tag: 'Marketing / Design',
                title: 'Virtual reality',
            },
            {
                id: 8,
                image: require('~/assets/images/startup-it-agency/case-study/case-study4.jpg'),
                tag: 'Ideas / Design',
                title: 'Tech solutions',
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
			},
            576: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            768: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            1024: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 4,
                snapAlign: 'center',
            },
            1550: {
                itemsToShow: 5,
                snapAlign: 'center',
            },
        },
    }),
}
</script>