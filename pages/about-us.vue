<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="About Us" />
        <AboutUsStyleThree class="pt-100" />
        <HistoryBegins />
        <OurTeamStyleTwo />
        <OurClientsAreSaying />
        <Partner />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import AboutUsStyleThree from '../components/Common/AboutUsStyleThree'
    import HistoryBegins from '../components/Common/HistoryBegins'
    import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo'
    import OurClientsAreSaying from '../components/HomeEight/OurClientsAreSaying'
    import Partner from '../components/Common/Partner'
    import Footer from '../layouts/Footer'
    import axios from 'axios';


    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            AboutUsStyleThree,
            HistoryBegins,
            OurTeamStyleTwo,
            OurClientsAreSaying,
            Partner,
            Footer,
        },
        data() {
        return {
            seoData: null,
        }
    },
    created: async function () {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/pages?filters[slug][$eq]=about-us&populate=deep,5`, { params: { slug } })
        this.details = reaponse.data.data;
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
}
</script>