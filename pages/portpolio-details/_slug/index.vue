<template>
    <div>
        <Navbar />
        <PageTitle v-if="details !== null" :pageTitle="details[0].attributes.title" pageDesc="Portpoios " />
        <div v-if="details !== null">
            <PortfolioDetails v-bind:detailsContent="details" />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../../../layouts/Navbar';
import PageTitle from '../../../components/Common/PageTitle';
import PortfolioDetails from '../../../components/PortfolioFive/PortfolioDetails'
import Footer from '../../../layouts/Footer'
import axios from 'axios';

export default {
    components: {
        Navbar,
        PageTitle,
        PortfolioDetails,
        Footer,
    },
    data() {
        return {
            details: null,
        }
    },
    created: async function () {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/portfolios?filters[slug][$eq]=${slug}&populate=*`, { params: { slug } })
        this.details = reaponse.data.data.sort((b, a) => a.id - b.id);
    },
};
</script>