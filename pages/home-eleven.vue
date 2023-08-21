<template>
    <div>
        <NavbarStyleSeven class="navbar-area-with-startup-it-agency" />
        <MainBanner />
        <EasySolution />
        <About />
        <Services />
        <BookAppointment />
        <CaseStudy />
        <Partner />
        <Feedback />
        <Team />
        <ChooseUs />
        <OurBlog />
        <FooterThree class="it-footer-area" />
    </div>
</template>

<script>
import NavbarStyleSeven from '../layouts/NavbarStyleSeven'
import MainBanner from '../components/HomeEleven/MainBanner'
import EasySolution from '../components/HomeEleven/EasySolution'
import About from '../components/HomeEleven/About'
import Services from '../components/HomeEleven/Services'
import BookAppointment from '../components/HomeEleven/BookAppointment'
import CaseStudy from '../components/HomeEleven/CaseStudy'
import Partner from '../components/HomeEleven/Partner'
import Feedback from '../components/HomeEleven/Feedback'
import Team from '../components/HomeEleven/Team'
import ChooseUs from '../components/HomeEleven/ChooseUs'
import OurBlog from '../components/HomeEleven/OurBlog'
import FooterThree from '../layouts/FooterThree'

export default {
    components: {
        NavbarStyleSeven,
        MainBanner,
        EasySolution,
        About,
        Services,
        BookAppointment,
        CaseStudy,
        Partner,
        Feedback,
        Team,
        ChooseUs,
        OurBlog,
        FooterThree,
    }
}
</script>