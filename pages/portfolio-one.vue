<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Portfolio 2 Columns" />
        <PortfolioColumnsTwoContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/NavbarStyleFour'
    import PageTitle from '../components/Common/PageTitle'
    import PortfolioColumnsTwoContent from '../components/PortfolioOne/PortfolioColumnsTwoContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            PortfolioColumnsTwoContent,
            Footer,
        }
    }
</script>