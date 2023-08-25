<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Portfolio No Space" />
        <PortfolioSixContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import PortfolioSixContent from '../components/PortfolioSix/PortfolioSixContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            PortfolioSixContent,
            Footer,
        }
    }
</script>