<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Privacy Policy" />
        <PrivacyPolicyContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import PrivacyPolicyContent from '../components/PrivacyPolicy/PrivacyPolicyContent'
    import Footer from '../layouts/Footer'
    import axios from 'axios';


    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            PrivacyPolicyContent,
            Footer,
        },
        data() {
        return {
            seoData: null,
        }
    },
    created: async function () {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/pages?filters[slug][$eq]=privacy-policy&populate=deep,5`, { params: { slug } })
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