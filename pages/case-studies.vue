<template>
    <div class="startup-it-agency-color-css">
        <NavbarStyleSeven class="navbar-area-with-startup-it-agency" />
        <PageTitle />
        <CaseStudy />
        <FooterThree class="it-footer-area" />
    </div>
</template>

<script>
import NavbarStyleSeven from '../layouts/NavbarStyleSeven'
import PageTitle from '../components/CaseStudies/PageTitle'
import CaseStudy from '../components/CaseStudies/CaseStudy'
import FooterThree from '../layouts/FooterThree'

export default {
    name: 'CaseStudiesPage',
    components: {
        NavbarStyleSeven,
        PageTitle,
        CaseStudy,
        FooterThree,
    }
}
</script>