<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Portfolio 3 Columns" />
        <PortfolioFiveContent />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import PageTitle from '../components/Common/PageTitle'
    import PortfolioFiveContent from '../components/PortfolioFive/PortfolioFiveContent'
    import FooterTwo from '../layouts/FooterTwo'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            PortfolioFiveContent,
            FooterTwo,
        }
    }
</script>