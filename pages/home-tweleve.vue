<template>
    <div class="data-science-color-css">
        <NavbarStyleSeven class="navbar-area-with-data-science" />
        <MainBanner />
        <Services />
        <About />
        <Funfacts />
        <Features />
        <Process />
        <Solutions />
        <Feedback />
        <Team />
        <CaseStudy />
        <Pricing />
        <Blog />
        <Subscribe />
        <FooterThree class="ds-footer-area" />
    </div>
</template>

<script>
import NavbarStyleSeven from '../layouts/Navbar'
import MainBanner from '../components/HomeTweleve/MainBanner'
import Services from '../components/HomeTweleve/Services'
import About from '../components/HomeTweleve/About'
import Funfacts from '../components/HomeTweleve/Funfacts'
import Features from '../components/HomeTweleve/Features'
import Process from '../components/HomeTweleve/Process'
import Solutions from '../components/HomeTweleve/Solutions'
import Feedback from '../components/HomeTweleve/Feedback'
import Team from '../components/HomeTweleve/Team'
import CaseStudy from '../components/HomeTweleve/CaseStudy'
import Pricing from '../components/HomeTweleve/Pricing'
import Blog from '../components/HomeTweleve/Blog'
import Subscribe from '../components/HomeTweleve/Subscribe'
import FooterThree from '../layouts/Footer'

export default {
    components: {
        NavbarStyleSeven,
        MainBanner,
        Services,
        About,
        Funfacts,
        Features,
        Process,
        Solutions,
        Feedback,
        Team,
        CaseStudy,
        Pricing,
        Blog,
        Subscribe,
        FooterThree,
    }
}
</script>