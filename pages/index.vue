<template>
    <div>
        <NavbarStyleTwo class="rivate-new-navbar-area" />
        <MainBanner />
        <Features />
        <AboutUs />
        <WhatWeDo />
        <CheckOurServices />
        <BookAppointment />
        <CaseStudy />
        <Partner />
        <OurTeam />
        <OurClientsAreSaying />
        <LatestBlog />
        <OurNewsletter />
        <FooterTwo />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/Navbar'
import MainBanner from '../components/HomeEight/MainBanner'
import Features from '../components/HomeEight/Features'
import AboutUs from '../components/HomeEight/AboutUs'
import WhatWeDo from '../components/HomeEight/WhatWeDo'
import CheckOurServices from '../components/HomeEight/CheckOurServices'
import BookAppointment from '../components/HomeEight/BookAppointment'
import CaseStudy from '../components/HomeEight/CaseStudy'
import Partner from '../components/HomeEight/Partner'
import OurTeam from '../components/HomeEight/OurTeam'
import OurClientsAreSaying from '../components/HomeEight/OurClientsAreSaying'
import LatestBlog from '../components/HomeEight/LatestBlog'
import OurNewsletter from '../components/HomeEight/OurNewsletter'
import FooterTwo from '../layouts/Footer'
import axios from 'axios';


export default {
    components: {
        NavbarStyleTwo,
        MainBanner,
        Features,
        AboutUs,
        WhatWeDo,
        CheckOurServices,
        BookAppointment,
        CaseStudy,
        Partner,
        OurTeam,
        OurClientsAreSaying,
        LatestBlog,
        OurNewsletter,
        FooterTwo,
    },
        data() {
        return {
            seoData: null,
        }
    },
    created: async function () {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/pages?filters[slug][$eq]=index&populate=deep,5`, { params: { slug } })
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