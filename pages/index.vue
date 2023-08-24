<template>
    <div>
        <NavbarStyleTwo class="rivate-new-navbar-area" />
        <MainBanner />
        <Features />
        <AboutUs />
        <WhatWeDo />
        <CheckOurServices />
        <OurTeam />
        <Video />
        <Partner />
        <Pricing />
        <OurClientsAreSaying />
        <LatestBlog />
        <OurNewsletter />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import MainBanner from '../components/HomeEight/MainBanner'
    import Features from '../components/HomeEight/Features'
    import AboutUs from '../components/HomeEight/AboutUs'
    import WhatWeDo from '../components/HomeEight/WhatWeDo'
    import CheckOurServices from '../components/HomeEight/CheckOurServices'
    import OurTeam from '../components/HomeEight/OurTeam'
    import Video from '../components/HomeEight/Video'
    import Partner from '../components/HomeEight/Partner'
    import Pricing from '../components/HomeEight/Pricing'
    import OurClientsAreSaying from '../components/HomeEight/OurClientsAreSaying'
    import LatestBlog from '../components/HomeEight/LatestBlog'
    import OurNewsletter from '../components/HomeEight/OurNewsletter'
    import FooterTwo from '../layouts/FooterTwo'

    export default {
        components: {
            NavbarStyleTwo,
            MainBanner,
            Features,
            AboutUs,
            WhatWeDo,
            CheckOurServices,
            OurTeam,
            Video,
            Partner,
            Pricing,
            OurClientsAreSaying,
            LatestBlog,
            OurNewsletter,
            FooterTwo,
        }
    }
</script>