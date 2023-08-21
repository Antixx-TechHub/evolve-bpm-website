<template>
    <div>
        <NavbarStyleFive />
        <MainBanner />
        <FeaturedServices class="pt-0" />
        <AboutUsStyleTwo />
        <AwesomeServices />
        <WhatWeDo />
        <WhatOurClientsSaying />
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
    import NavbarStyleFive from '../layouts/NavbarStyleFive'
    import MainBanner from '../components/HomeSix/MainBanner'
    import FeaturedServices from '../components/Common/FeaturedServices'
    import AboutUsStyleTwo from '../components/Common/AboutUsStyleTwo'
    import AwesomeServices from '../components/HomeSix/AwesomeServices'
    import WhatWeDo from '../components/Common/WhatWeDo'
    import WhatOurClientsSaying from '../components/Common/WhatOurClientsSaying'
    import OurSomeRecentWorks from '../components/Common/OurSomeRecentWorks'
    import Partner from '../components/Common/Partner'
    import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo'
    import OurFlexiblePricingPlan from '../components/Common/OurFlexiblePricingPlan'
    import StartYourProjectWithUs from '../components/Common/StartYourProjectWithUs'
    import LatestBlog from '../components/Common/LatestBlog'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFive,
            MainBanner,
            FeaturedServices,
            AboutUsStyleTwo,
            AwesomeServices,
            WhatWeDo,
            WhatOurClientsSaying,
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