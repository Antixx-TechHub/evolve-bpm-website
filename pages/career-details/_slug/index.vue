<template>
    <div>
        <Navbar />
        <PageTitle v-if="details !== null" :pageTitle="details[0].attributes.title" pageDesc="News and Insights" />
        <div v-if="details !== null">
            <CareerDetails v-bind:detailsContent="details" />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../../../layouts/Navbar'
import PageTitle from '../../../components/Common/PageTitle'
import CareerDetails from '../../../components/careers/CareerDetails'
import Footer from '../../../layouts/Footer'
import axios from 'axios';

export default {
    components: {
        Navbar,
        PageTitle,
        CareerDetails,
        Footer,
    },
    data() {
        return {
            details: null,
            seoData: null,
        }
    },
    created: async function () {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/job-listings?filters[slug][$eq]=${slug}&populate=*`, { params: { slug } })
        this.details = reaponse.data.data.sort((b, a) => a.id - b.id);
        const pageData = this.details.length > 0 ? this.details[0] : {};
        if (pageData?.attributes?.seo) {
            this.seoData = pageData.attributes.seo;
        }
    },
    head({ $seo }) {
        return $seo({
            title: this.seoData?.metaTitle,
            description: this.seoData?.metaDescription,
            keywords: this.seoData?.keywords,
        });
    },
};
</script>