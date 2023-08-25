<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Portfolio 3 Columns" />
        <PortfolioColumnsThreeContent />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import PortfolioColumnsThreeContent from '../components/PortfolioTwo/PortfolioColumnsThreeContent'
    import FooterTwo from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            PortfolioColumnsThreeContent,
            FooterTwo,
        }
    }
</script>