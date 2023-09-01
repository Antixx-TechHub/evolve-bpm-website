<template>
    <div class="career-area pt-100 pb-100">
        <div class="container">
            <div class="section-title">
                <span>Career</span>
                <h2>When You Have Jobs In Multiple <b>Locations</b></h2>
            </div>

            <div class="career-item">
                <div class="row align-items-center" v-if="joblistings !== []">
                    <div class="col-lg-9 col-md-9" v-for="joblisting in joblistings.slice(
                    (currentPage - 1) * perPage,
                    currentPage * perPage,
                )" :key="joblisting.id">
                        <div class="career-content">
                            <h3>
                                <router-link :to="`/career-details/${joblisting.attributes.slug}`">
                                                        {{ joblisting.attributes.title }}
                                                    </router-link>
                            </h3>
                            <p>{{ joblisting.attributes.shortText }}</p>
                            <ul class="list">
                                <li><span>Location:</span> {{ joblisting.attributes.Location }}</li>
                                <li><span>Type:</span> {{ joblisting.attributes.EmploymentType }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3">
                        <div class="career-btn text-end">
                            <router-link to="/career-details" class="default-btn" style="padding-left: 25px">Apply Now</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 col-md-12">
                <div class="pagination-area">
                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="itemList"
                        align="center"></b-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";

export default {
    name: 'Career',
    data() {
        return {
            joblistings: [],
            rows: 0,
            currentPage: 1,
            perPage: 6,
        }
    },
    created: async function () {
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/job-listings?populate=*')
        this.joblistings = response.data.data.sort((b, a) => a.id - b.id);
        this.rows = this.joblistings?.length;
    },
}
</script>