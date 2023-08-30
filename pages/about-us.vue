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
            seoData: [],
        }
    },
    created: async function () {
        const response = await axios.get('http://localhost:1337/api/pages?filters[slug][$eq]=about-us&populate=deep,5')
        const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
        if (pageData?.attributes?.seo?.length > 0) {
            this.seoData = pageData.attributes.seo[0];
        }
    },
    head({ $seo }) {
        return $seo({
            title: this.seoData.metaTitle,
            description: this.seoData.metaDescription,
            keywords: this.seoData.keywords,
        });
    },
}
</script>