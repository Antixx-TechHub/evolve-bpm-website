<template>
    <div>
        <NavbarStyleFive />
        <MainBanner />
        <OurFeaturedServices />
        <AboutUs />
        <WhatWeDo />
        <CheckOurServices />
        <OurClientsAreSaying />
        <Partner />
        <OurTeam />
        <OurFlexiblePricingPlan />
        <OurNewsletter />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFive from '../layouts/Navbar'
    import MainBanner from '../components/HomeFour/MainBanner'
    import OurFeaturedServices from '../components/Common/OurFeaturedServices'
    import AboutUs from '../components/Common/AboutUs'
    import WhatWeDo from '../components/Common/WhatWeDo'
    import CheckOurServices from '../components/Common/CheckOurServices'
    import OurClientsAreSaying from '../components/Common/OurClientsAreSaying'
    import Partner from '../components/Common/Partner'
    import OurTeam from '../components/Common/OurTeam'
    import OurFlexiblePricingPlan from '../components/Common/OurFlexiblePricingPlan'
    import OurNewsletter from '../components/Common/OurNewsletter'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFive,
            MainBanner,
            OurFeaturedServices,
            AboutUs,
            WhatWeDo,
            CheckOurServices,
            OurClientsAreSaying,
            Partner,
            OurTeam,
            OurFlexiblePricingPlan,
            OurNewsletter,
            Footer,
        }
    }
</script>