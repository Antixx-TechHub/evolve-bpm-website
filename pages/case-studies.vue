<template>
    <div class="startup-it-agency-color-css">
        <!-- <NavbarStyleTwo class="navbar-area-with-startup-it-agency" /> -->
        <NavbarStyleTwo />
        <PageTitle />
        <CaseStudy />
        <FooterTwo  class="it-footer-area" />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import PageTitle from '../components/CaseStudies/PageTitle'
import CaseStudy from '../components/CaseStudies/CaseStudy'
import FooterTwo from '../layouts/FooterTwo'

export default {
    name: 'CaseStudiesPage',
    components: {
        NavbarStyleTwo,
        PageTitle,
        CaseStudy,
        FooterTwo,
    }
}
</script>