<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="About Us" />
        <AboutUsStyleThree class="pt-100" />
        <HistoryBegins />
        <OurTeamStyleTwo />
        <OurClientsAreSaying />
        <Partner />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import AboutUsStyleThree from '../components/Common/AboutUsStyleThree'
    import HistoryBegins from '../components/Common/HistoryBegins'
    import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo'
    import OurClientsAreSaying from '../components/HomeEight/OurClientsAreSaying'
    import Partner from '../components/Common/Partner'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            AboutUsStyleThree,
            HistoryBegins,
            OurTeamStyleTwo,
            OurClientsAreSaying,
            Partner,
            Footer,
        }
    }
</script>