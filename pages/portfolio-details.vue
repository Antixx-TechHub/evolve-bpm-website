<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Portfolio Details" />
        <PortfolioDetailsContent />
        <MoreProjects />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/NavbarStyleFour'
    import PageTitle from '../components/Common/PageTitle'
    import PortfolioDetailsContent from '../components/PortfolioDetails/PortfolioDetailsContent'
    import MoreProjects from '../components/PortfolioDetails/MoreProjects'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            PortfolioDetailsContent,
            MoreProjects,
            Footer,
        }
    }
</script>