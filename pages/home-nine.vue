<template>
    <div>
        <NavbarStyleSix class="rivate-new-navbar-area-style-two" />
        <MainBanner />
        <Features />
        <AboutUs />
        <CheckOurServices />
        <WhatWeDo />
        <CaseStudies />
        <OurTeamStyleThree />
        <Video />
        <Partner />
        <Pricing />
        <GetStarted />
        <OurClientsAreSaying />
        <LatestBlog />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleSix from '../layouts/Navbar'
    import MainBanner from '../components/HomeNine/MainBanner'
    import Features from '../components/Common/Features'
    import AboutUs from '../components/HomeNine/AboutUs'
    import CheckOurServices from '../components/HomeNine/CheckOurServices'
    import WhatWeDo from '../components/HomeNine/WhatWeDo'
    import CaseStudies from '../components/HomeNine/CaseStudies'
    import OurTeamStyleThree from '../components/Common/OurTeamStyleThree'
    import Video from '../components/HomeNine/Video'
    import Partner from '../components/HomeNine/Partner'
    import Pricing from '../components/HomeNine/Pricing'
    import GetStarted from '../components/HomeNine/GetStarted'
    import OurClientsAreSaying from '../components/HomeNine/OurClientsAreSaying'
    import LatestBlog from '../components/HomeNine/LatestBlog'
    import FooterTwo from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleSix,
            MainBanner,
            Features,
            AboutUs,
            CheckOurServices,
            WhatWeDo,
            CaseStudies,
            OurTeamStyleThree,
            Video,
            Partner,
            Pricing,
            GetStarted,
            OurClientsAreSaying,
            LatestBlog,
            FooterTwo,
        }
    }
</script>