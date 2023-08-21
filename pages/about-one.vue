<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="About Us" />
        <AboutUs class="ptb-100" />
        <HistoryBegins />
        <OurTeam />
        <Partner />
        <OurClientsAreSaying />
        <Footer />
    </div>
</template>

<script>
import NavbarStyleFour from '../layouts/NavbarStyleFour'
import PageTitle from '../components/Common/PageTitle'
import AboutUs from '../components/Common/AboutUs'
import HistoryBegins from '../components/Common/HistoryBegins'
import OurTeam from '../components/Common/OurTeam'
import Partner from '../components/Common/Partner'
import OurClientsAreSaying from '../components/About/OurClientsAreSaying'
import Footer from '../layouts/Footer'

export default {
    components: {
        NavbarStyleFour,
        PageTitle,
        AboutUs,
        HistoryBegins,
        OurTeam,
        Partner,
        OurClientsAreSaying,
        Footer,
    }
}
</script>