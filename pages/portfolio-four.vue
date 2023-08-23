<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Portfolio 2 Columns" />
        <PortfolioFourContent />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import PageTitle from '../components/Common/PageTitle'
    import PortfolioFourContent from '../components/PortfolioFour/PortfolioFourContent'
    import FooterTwo from '../layouts/FooterTwo'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            PortfolioFourContent,
            FooterTwo,
        }
    }
</script>