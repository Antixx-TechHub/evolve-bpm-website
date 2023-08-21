<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Frequently Asked Questions" />
        <FaqContent />
        <StartYourProjectWithUs />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/NavbarStyleFour'
    import PageTitle from '../components/Common/PageTitle'
    import FaqContent from '../components/Faq/FaqContent'
    import StartYourProjectWithUs from '../components/Common/StartYourProjectWithUs'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            FaqContent,
            StartYourProjectWithUs,
            Footer,
        }
    }
</script>