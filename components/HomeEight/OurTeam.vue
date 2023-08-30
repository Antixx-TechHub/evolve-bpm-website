<template>
    <div class="rivate-team-area ptb-100">
        <div class="container">
            <div class="section-title with-gradient-color">
                <span class="sub-title">OUR TEAM</span>
                <h2>We Help to Acheive Your Business Goal</h2>
            </div>

            <div class="row justify-content-center" v-if="teams !== null">
                <div class="col-lg-3 col-sm-6" v-for="team in teams.singleTeam" :key="team.id">
                    <div class="rivate-team-card">
                        <div class="team-image">
                            <img :src="team.image.data.attributes.url" alt="teams">

                            <ul class="social-link">
                                <!-- <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-facebook'></i></a></li>
                                <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-twitter'></i></a></li>
                                <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-instagram'></i></a></li> -->
                                <li><a :href="team.linkedin" class="d-block" target="_blank"><i
                                            class='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                        <div class="team-content">
                            <h3>{{ team.title }}</h3>
                            <span>{{ team.designation }}</span>
                            <!-- <p>{{ team.shortDesc }}</p> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="rivate-team-bottom-text">
            <NuxtLink to="/team">See All Our Team Member</NuxtLink>
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