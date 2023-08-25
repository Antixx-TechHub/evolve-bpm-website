<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle v-if="details !== null" :pageTitle="details[0].attributes.title" pageDesc="News and Insights" />
        <div v-if="details !== null">
            <BlogDetails v-bind:detailsContent="details" />
        </div>
        <FooterTwo />
    </div>
</template>

<script>
import NavbarStyleTwo from '../../../layouts/Navbar';
import PageTitle from '../../../components/Common/PageTitle';
import BlogDetails from '../../../components/BlogTwo/BlogDetails'
import FooterTwo from '../../../layouts/Footer'
import axios from 'axios';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        BlogDetails,
        FooterTwo,
    },
    data() {
        return {
            details: null,
            seoData: null,
        }
    },
    created: async function () {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/blogs?filters[slug][$eq]=${slug}&populate=*`, { params: { slug } })
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