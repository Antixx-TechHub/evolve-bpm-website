<template>
    <div>
        <NavbarStyleThree />
        <MainBanner />
        <FeaturedServices />
        <AboutUsStyleThree />
        <AwesomeServices />
        <WhatWeDo />
        <OurClientsAreSaying />
        <OurSomeRecentWorks />
        <Partner />
        <OurTeamStyleTwo />
        <OurFlexiblePricingPlan />
        <StartYourProjectWithUs />
        <LatestBlog />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleThree from '../layouts/NavbarStyleThree'
    import MainBanner from '../components/HomeFive/MainBanner'
    import FeaturedServices from '../components/Common/FeaturedServices'
    import AboutUsStyleThree from '../components/Common/AboutUsStyleThree'
    import AwesomeServices from '../components/HomeFive/AwesomeServices'
    import WhatWeDo from '../components/Common/WhatWeDo'
    import OurClientsAreSaying from '../components/Common/OurClientsAreSaying'
    import OurSomeRecentWorks from '../components/Common/OurSomeRecentWorks'
    import Partner from '../components/Common/Partner'
    import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo'
    import OurFlexiblePricingPlan from '../components/Common/OurFlexiblePricingPlan'
    import StartYourProjectWithUs from '../components/Common/StartYourProjectWithUs'
    import LatestBlog from '../components/Common/LatestBlog'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleThree,
            MainBanner,
            FeaturedServices,
            AboutUsStyleThree,
            AwesomeServices,
            WhatWeDo,
            OurClientsAreSaying,
            OurSomeRecentWorks,
            Partner,
            OurTeamStyleTwo,
            OurFlexiblePricingPlan,
            StartYourProjectWithUs,
            LatestBlog,
            Footer,
        }
    }
</script>