<template>
    <div>
        <NavbarStyleSix class="rivate-new-navbar-area-style-two" />
        <MainBanner />
        <CheckOurServices />
        <Overview />
        <AboutUs />
        <WhatWeDo />
        <CaseStudies />
        <OurClientsAreSaying />
        <CreativeSolutions />
        <Pricing />
        <Features />
        <OurTeamStyleThree />
        <Partner />
        <LatestBlog />
        <OurNewsletter />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleSix from '../layouts/Navbar'
    import MainBanner from '../components/HomeTen/MainBanner'
    import CheckOurServices from '../components/HomeTen/CheckOurServices'
    import Overview from '../components/HomeTen/Overview'
    import AboutUs from '../components/HomeTen/AboutUs'
    import WhatWeDo from '../components/HomeTen/WhatWeDo'
    import CaseStudies from '../components/HomeTen/CaseStudies'
    import OurClientsAreSaying from '../components/HomeTen/OurClientsAreSaying'
    import CreativeSolutions from '../components/HomeTen/CreativeSolutions'
    import Pricing from '../components/HomeTen/Pricing'
    import Features from '../components/Common/Features'
    import OurTeamStyleThree from '../components/Common/OurTeamStyleThree'
    import Partner from '../components/HomeTen/Partner'
    import LatestBlog from '../components/HomeTen/LatestBlog'
    import OurNewsletter from '../components/HomeTen/OurNewsletter'
    import FooterTwo from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleSix,
            MainBanner,
            CheckOurServices,
            Overview,
            AboutUs,
            WhatWeDo,
            CaseStudies,
            OurClientsAreSaying,
            CreativeSolutions,
            Pricing,
            Features,
            OurTeamStyleThree,
            Partner,
            LatestBlog,
            OurNewsletter,
            FooterTwo,
        }
    }
</script>