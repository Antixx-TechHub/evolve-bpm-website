<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="About Us" />
        <AboutUsStyleThree class="pt-100" />
        <HistoryBegins />
        <OurTeamStyleTwo />
        <WhatOurClientsSaying />
        <Partner />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/NavbarStyleFour'
    import PageTitle from '../components/Common/PageTitle'
    import AboutUsStyleThree from '../components/Common/AboutUsStyleThree'
    import HistoryBegins from '../components/Common/HistoryBegins'
    import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo'
    import WhatOurClientsSaying from '../components/HomeThree/WhatOurClientsSaying'
    import Partner from '../components/Common/Partner'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            AboutUsStyleThree,
            HistoryBegins,
            OurTeamStyleTwo,
            WhatOurClientsSaying,
            Partner,
            Footer,
        }
    }
</script>