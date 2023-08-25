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
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import PageTitle from '../components/Common/PageTitle'
    import PortfolioDetailsContent from '../components/PortfolioDetails/PortfolioDetailsContent'
    import MoreProjects from '../components/PortfolioDetails/MoreProjects'
    import FooterTwo from '../layouts/FooterTwo'

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