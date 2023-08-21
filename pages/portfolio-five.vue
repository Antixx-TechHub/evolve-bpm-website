<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Portfolio 3 Columns" />
        <PortfolioFiveContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/NavbarStyleFour'
    import PageTitle from '../components/Common/PageTitle'
    import PortfolioFiveContent from '../components/PortfolioFive/PortfolioFiveContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            PortfolioFiveContent,
            Footer,
        }
    }
</script>