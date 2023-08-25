<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Portfolio 3 Columns" />
        <PortfolioFiveContent />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import PortfolioFiveContent from '../components/PortfolioFive/PortfolioFiveContent'
    import FooterTwo from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            PortfolioFiveContent,
            FooterTwo,
        }
    }
</script>