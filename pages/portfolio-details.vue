<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Portfolio Details" />
        <PortfolioDetailsContent />
        <MoreProjects />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import PortfolioDetailsContent from '../components/PortfolioDetails/PortfolioDetailsContent'
    import MoreProjects from '../components/PortfolioDetails/MoreProjects'
    import FooterTwo from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            PortfolioDetailsContent,
            MoreProjects,
            FooterTwo,
        }
    }
</script>