<template>
    <div>
        <NavbarStyleTwo class="rivate-new-navbar-area" />
        <PageTitle pageTitle="About Us" />
        <AboutUsStyleThree class="pt-100" />
        <HistoryBegins />
        <OurTeamStyleTwo />
        <WhatOurClientsSaying />
        <Partner />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import PageTitle from '../components/Common/PageTitle'
    import AboutUsStyleThree from '../components/Common/AboutUsStyleThree'
    import HistoryBegins from '../components/Common/HistoryBegins'
    import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo'
    import WhatOurClientsSaying from '../components/HomeThree/WhatOurClientsSaying'
    import Partner from '../components/Common/Partner'
    import FooterTwo from '../layouts/FooterTwo'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            AboutUsStyleThree,
            HistoryBegins,
            OurTeamStyleTwo,
            WhatOurClientsSaying,
            Partner,
            FooterTwo,
        }
    }
</script>