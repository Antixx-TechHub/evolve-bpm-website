<template>
    <div>
        <TopHeader />
        <NavbarStyleSix />
        <MainBanner />
        <FeaturedServices />
        <AboutUs />
        <CheckOurServices />
        <WhatWeDo />
        <WhatOurClientsSaying />
        <OurSomeRecentWorks />
        <Partner />
        <OurTeamStyleTwo />
        <OurFlexiblePricingPlan />
        <LatestBlog class="pt-0" />
        <OurNewsletter />
        <Footer />
    </div>
</template>

<script>
    import TopHeader from '../layouts/TopHeader'
    import NavbarStyleSix from '../layouts/Navbar'
    import MainBanner from '../components/HomeSeven/MainBanner'
    import FeaturedServices from '../components/Common/FeaturedServices'
    import AboutUs from '../components/Common/AboutUs'
    import CheckOurServices from '../components/Common/CheckOurServices'
    import WhatWeDo from '../components/Common/WhatWeDo'
    import WhatOurClientsSaying from '../components/Common/WhatOurClientsSaying'
    import OurSomeRecentWorks from '../components/Common/OurSomeRecentWorks'
    import Partner from '../components/Common/Partner'
    import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo'
    import OurFlexiblePricingPlan from '../components/Common/OurFlexiblePricingPlan'
    import LatestBlog from '../components/Common/LatestBlog'
    import OurNewsletter from '../components/Common/OurNewsletter'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            TopHeader,
            NavbarStyleSix,
            MainBanner,
            FeaturedServices,
            AboutUs,
            CheckOurServices,
            WhatWeDo,
            WhatOurClientsSaying,
            OurSomeRecentWorks,
            Partner,
            OurTeamStyleTwo,
            OurFlexiblePricingPlan,
            LatestBlog,
            OurNewsletter,
            Footer,
        }
    }
</script>