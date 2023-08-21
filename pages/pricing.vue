<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Pricing" />
        <PricingContent />
        <StartYourProjectWithUs />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/NavbarStyleFour'
    import PageTitle from '../components/Common/PageTitle'
    import PricingContent from '../components/Pricing/PricingContent'
    import StartYourProjectWithUs from '../components/Common/StartYourProjectWithUs'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            PricingContent,
            StartYourProjectWithUs,
            Footer,
        }
    }
</script>