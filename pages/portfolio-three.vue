<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Portfolio No Space" />
        <PortfolioThreeContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import PortfolioThreeContent from '../components/PortfolioThree/PortfolioThreeContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            PortfolioThreeContent,
            Footer,
        }
    }
</script>