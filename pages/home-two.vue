<template>
    <div>
        <NavbarStyleTwo />
        <MainBanner />
        <ServicesContant />
        <AboutUsStyleTwo />
        <CheckOurServices />
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
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import MainBanner from '../components/HomeTwo/MainBanner'
    import ServicesContant from '../components/HomeTwo/ServicesContant'
    import AboutUsStyleTwo from '../components/Common/AboutUsStyleTwo'
    import CheckOurServices from '../components/Common/CheckOurServices'
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
            NavbarStyleTwo,
            MainBanner,
            ServicesContant,
            AboutUsStyleTwo,
            CheckOurServices,
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