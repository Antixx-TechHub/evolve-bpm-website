<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Services Details" />
        <CreativeSolutions />
        <CoreBusiness />
        <GetFreeAnalysis />
        <OurFlexiblePricingPlan />
        <StartYourProjectWithUs />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import CreativeSolutions from '../components/ServicesDetails/CreativeSolutions'
    import CoreBusiness from '../components/ServicesDetails/CoreBusiness'
    import GetFreeAnalysis from '../components/ServicesDetails/GetFreeAnalysis'
    import OurFlexiblePricingPlan from '../components/Common/OurFlexiblePricingPlan'
    import StartYourProjectWithUs from '../components/Common/StartYourProjectWithUs'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            CreativeSolutions,
            CoreBusiness,
            GetFreeAnalysis,
            OurFlexiblePricingPlan,
            StartYourProjectWithUs,
            Footer,
        }
    }
</script>