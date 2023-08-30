<template>
    <div class="team-area-two ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Our Team</span>
                <h2>We Help to Achieve Your Business Goal</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div class="team-slides owl-carousel owl-theme" v-if="teams !== null">
                <carousel
                    :autoplay="true"
                    :loop="true"
                    :autoplayTimeout="7000"
                    :speed="1000"
                    :paginationEnabled="true"
                    :perPageCustom="[[0, 1], [576, 2], [768, 2], [992, 4], [1200, 4]]"
                >
                    <slide v-for="team in teams.singleTeam" :key="team.id">
                        <div class="single-team-member">
                            <div class="image">
                                <img :src="team.image.data.attributes.url" alt="teams">

                                <ul class="social-link">
                                <!-- <li>
                                    <a
                                    href="https://www.facebook.com/"
                                    class="d-block"
                                    target="_blank"
                                    ><i class="bx bxl-facebook"></i
                                    ></a>
                                </li>
                                <li>
                                    <a
                                    href="https://twitter.com/"
                                    class="d-block"
                                    target="_blank"
                                    ><i class="bx bxl-twitter"></i
                                    ></a>
                                </li>
                                <li>
                                    <a
                                    href="https://www.instagram.com/"
                                    class="d-block"
                                    target="_blank"
                                    ><i class="bx bxl-instagram"></i
                                    ></a>
                                </li> -->
                                <li>
                                    <a
                                    :href="team.linkedin"
                                    class="d-block"
                                    target="_blank"
                                    ><i class="bx bxl-linkedin"></i
                                    ></a>
                                </li>
                                </ul>
                            </div>

                            <div class="content">
                                <h3>{{ team.title }}</h3>
                                <span>{{ team.designation }}</span>
                                <i class="flaticon-share-icon"></i>
                            </div>
                        </div>
                    </slide>

                    
                </carousel>
            </div>
        </div>

        <div class="shape17">
            <img src="~/assets/images/shape/shape17.png" alt="image" />
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'OurTeam',
    data() {
        return {
            teams: null,
        }
    },
    created: async function () {
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/team?populate=deep,5')
        const { data: { attributes } } = response.data
        this.teams = attributes
    },

}
</script>
