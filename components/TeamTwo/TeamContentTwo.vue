<template>
    <div class="team-area-two pt-100 pb-70">
        <div class="container">
            <div class="row align-items-center" v-if="teams !== null">
                <div class="col-lg-3 col-md-6 col-sm-6" v-for="team in teams.singleTeam" :key="team.id">
                    <div class="single-team-member">
                        <div class="image">
                            <img :src="team.image.data.attributes.url" alt="teams">

                            <ul class="social-link">
                                <li><a :href="team.linkedin" class="d-block" target="_blank"><i
                                            class='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>

                        <div class="content">
                            <h3>{{ team.title }}</h3>
                            <span>{{ team.designation }}</span>
                            <i class="flaticon-share-icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'TeamContentTwo',
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