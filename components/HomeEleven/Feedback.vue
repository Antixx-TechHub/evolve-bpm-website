<template>
    <div class="it-feedback-area ptb-100">
        <div class="container">
            <div class="startup-it-agency-title">
                <span>Client reviews</span>
                <h2>Feedback from our clients</h2>
                <p>Lorem ipsum dolor sit amet consectetur nod adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm andhn dolore magna labore.</p>
            </div>

            <div class="it-feedback-slides">
                <carousel
                    :autoplay="true"
                    :loop="true"
                    :autoplayTimeout="7000"
                    :speed="1000"
                    :paginationEnabled="true"
                    :perPageCustom="[[0, 1], [576, 2], [768, 2], [1024, 3], [1200, 3]]"
                >
                    <slide 
                        v-for="slide in carouselItems" 
                        :key="slide.id"
                    >
                        <div class="it-feedback-card">
                            <div class="info">
                                <img :src="slide.image" alt="image">
                                <div class="title">
                                    <h3>{{slide.name}}</h3>
                                    <span>{{slide.position}}</span>
                                </div>
                            </div>
                            <p>{{slide.description}}</p>
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

        <div class="it-feedback-shape">
            <img src="~/assets/images/startup-it-agency/feedback-shape.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Feedback',
    data: () => ({
        carouselItems: [
            {
                id: 1,
                image: require('~/assets/images/user1.jpg'),
                name: 'Abraham linkon',
                position: 'Graphics designer',
                description: '“Lorem ipsum do amet consectetur adipisicing perspiciatis soluta aspernatur dolorum sequi quisquam ullam pariatur nihil dolorem cumque excepturi totam.”',
            },
            {
                id: 2,
                image: require('~/assets/images/user2.jpg'),
                name: 'Amanda brown',
                position: 'Chief officer',
                description: '“Lorem ipsum do amet consectetur adipisicing perspiciatis soluta aspernatur dolorum sequi quisquam ullam pariatur nihil dolorem cumque excepturi totam.”',
            },
            {
                id: 3,
                image: require('~/assets/images/user3.jpg'),
                name: 'Mike wazowski',
                position: 'Analytic officer',
                description: '“Lorem ipsum do amet consectetur adipisicing perspiciatis soluta aspernatur dolorum sequi quisquam ullam pariatur nihil dolorem cumque excepturi totam.”',
            },
            {
                id: 4,
                image: require('~/assets/images/user2.jpg'),
                name: 'Amanda brown',
                position: 'Chief officer',
                description: '“Lorem ipsum do amet consectetur adipisicing perspiciatis soluta aspernatur dolorum sequi quisquam ullam pariatur nihil dolorem cumque excepturi totam.”',
            },
            {
                id: 5,
                image: require('~/assets/images/user3.jpg'),
                name: 'Mike wazowski',
                position: 'Analytic officer',
                description: '“Lorem ipsum do amet consectetur adipisicing perspiciatis soluta aspernatur dolorum sequi quisquam ullam pariatur nihil dolorem cumque excepturi totam.”',
            },
        ],
    }),
}
</script>