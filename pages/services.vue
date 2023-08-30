<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Services" />
        <ServicesContent />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import ServicesContent from '../components/ServicesOne/ServicesContent'
    import FooterTwo from '../layouts/Footer'
    import axios from 'axios';


    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            ServicesContent,
            FooterTwo,
        },
        data() {
        return {
            seoData: [],
        }
    },
    created: async function () {
        const response = await axios.get('http://localhost:1337/api/pages?filters[slug][$eq]=services-1&populate=deep,5')
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
            // image: this.post.image || '',
        });
    },
}
</script>