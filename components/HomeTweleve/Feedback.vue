<template>
    <div class="ds-feedback-area pt-100">
        <div class="container">
            <div class="ds-section-title text-start">
                <h2>What our client say</h2>
                <p>Integer vel elit congue accumsan ligula placerat mi uisque tempor sapien justo sed accumsan tortor ultrices nec.</p>
            </div>

            <div class="ds-feedback-slides">
                <carousel
                    :autoplay="true"
                    :loop="true"
                    :autoplayTimeout="7000"
                    :speed="1000"
                    :paginationEnabled="false"
                    :perPageCustom="[[0, 1], [576, 2], [768, 2], [1024, 3], [1200, 3]]"
                    :navigationEnabled = "true"
                    navigationNextLabel="<i class='flaticon-chevron'></i>"
                    navigationPrevLabel="<i class='flaticon-back'></i>"
                >
                    <slide 
                        v-for="slide in carouselItems" 
                        :key="slide.id"
                    >
                        <div class="ds-feedback-card">
                            <div class="info">
                                <img :src="slide.image" alt="image">
                                <div class="title">
                                    <h3>{{slide.name}}</h3>
                                    <span>{{slide.position}}</span>
                                </div>
                            </div>
                            <ul class="rating">
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                            </ul>
                            <p>{{slide.desc}}</p>
                        </div>
                    </slide>
                </carousel>
            </div>
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
                name: 'Luise henrikes',
                position: 'CEO founder',
                desc: '“Lorem ipsum do amet consectetur adipisicing perspiciatis aspernatur dolorum sequi quisquam ullam pariatur nihil dolorem cumque excepturi totam qui excepturi dolore magna.”',
            },
            {
                id: 2,
                image: require('~/assets/images/user2.jpg'),
                name: 'Jhoni habard',
                position: 'Web designer',
                desc: '“Lorem ipsum do amet consectetur adipisicing perspiciatis aspernatur dolorum sequi quisquam ullam pariatur nihil dolorem cumque excepturi totam qui excepturi dolore magna.”',
            },
            {
                id: 3,
                image: require('~/assets/images/user3.jpg'),
                name: 'Jara lopez',
                position: 'Manager',
                desc: '“Lorem ipsum do amet consectetur adipisicing perspiciatis aspernatur dolorum sequi quisquam ullam pariatur nihil dolorem cumque excepturi totam qui excepturi dolore magna.”',
            },
            {
                id: 4,
                image: require('~/assets/images/user2.jpg'),
                name: 'Jhoni habard',
                position: 'Web designer',
                desc: '“Lorem ipsum do amet consectetur adipisicing perspiciatis aspernatur dolorum sequi quisquam ullam pariatur nihil dolorem cumque excepturi totam qui excepturi dolore magna.”',
            },
            {
                id: 5,
                image: require('~/assets/images/user3.jpg'),
                name: 'Jara lopez',
                position: 'Manager',
                desc: '“Lorem ipsum do amet consectetur adipisicing perspiciatis aspernatur dolorum sequi quisquam ullam pariatur nihil dolorem cumque excepturi totam qui excepturi dolore magna.”',
            },
            {
                id: 6,
                image: require('~/assets/images/user2.jpg'),
                name: 'Jhoni habard',
                position: 'Web designer',
                desc: '“Lorem ipsum do amet consectetur adipisicing perspiciatis aspernatur dolorum sequi quisquam ullam pariatur nihil dolorem cumque excepturi totam qui excepturi dolore magna.”',
            },
            {
                id: 7,
                image: require('~/assets/images/user3.jpg'),
                name: 'Jara lopez',
                position: 'Manager',
                desc: '“Lorem ipsum do amet consectetur adipisicing perspiciatis aspernatur dolorum sequi quisquam ullam pariatur nihil dolorem cumque excepturi totam qui excepturi dolore magna.”',
            },
        ],
    }),
}
</script>