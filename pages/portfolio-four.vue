<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Portfolio 2 Columns" />
        <PortfolioFourContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import PortfolioFourContent from '../components/PortfolioFour/PortfolioFourContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            PortfolioFourContent,
            Footer,
        }
    }
</script>