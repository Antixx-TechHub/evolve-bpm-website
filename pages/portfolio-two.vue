<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Portfolio 3 Columns" />
        <PortfolioColumnsThreeContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/NavbarStyleFour'
    import PageTitle from '../components/Common/PageTitle'
    import PortfolioColumnsThreeContent from '../components/PortfolioTwo/PortfolioColumnsThreeContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            PortfolioColumnsThreeContent,
            Footer,
        }
    }
</script>