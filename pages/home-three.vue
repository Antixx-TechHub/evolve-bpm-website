<template>
    <div>
        <NavbarStyleThree />
        <MainBanner />
        <Partner />
        <OurFeaturedServices />
        <AboutUsStyleThree />
        <CheckOurServices />
        <GetFreeAnalysis />
        <WhatOurClientsSaying />
        <CheckOfOurCaseStudies />
        <OurWorkingProcess />
        <OurTeamStyleTwo />
        <LatestBlog />
        <OurNewsletter />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleThree from '../layouts/Navbar'
    import MainBanner from '../components/HomeThree/MainBanner'
    import Partner from '../components/Common/Partner'
    import OurFeaturedServices from '../components/Common/OurFeaturedServices'
    import AboutUsStyleThree from '../components/Common/AboutUsStyleThree'
    import CheckOurServices from '../components/Common/CheckOurServices'
    import GetFreeAnalysis from '../components/HomeThree/GetFreeAnalysis'
    import WhatOurClientsSaying from '../components/HomeThree/WhatOurClientsSaying'
    import CheckOfOurCaseStudies from '../components/HomeThree/CheckOfOurCaseStudies'
    import OurWorkingProcess from '../components/HomeThree/OurWorkingProcess'
    import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo'
    import LatestBlog from '../components/Common/LatestBlog'
    import OurNewsletter from '../components/Common/OurNewsletter'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleThree,
            MainBanner,
            Partner,
            OurFeaturedServices,
            AboutUsStyleThree,
            CheckOurServices,
            GetFreeAnalysis,
            WhatOurClientsSaying,
            CheckOfOurCaseStudies,
            OurWorkingProcess,
            OurTeamStyleTwo,
            LatestBlog,
            OurNewsletter,
            Footer,
        }
    }
</script>