<template>
    <div class="startup-it-agency-color-css">
        <NavbarStyleSeven class="navbar-area-with-startup-it-agency" />
        <PageTitle />
        <CaseStudiesDetails />
        <FooterThree class="it-footer-area" />
    </div>
</template>

<script>
import NavbarStyleSeven from '../layouts/NavbarStyleSeven'
import PageTitle from '../components/CaseStudiesDetails/PageTitle'
import CaseStudiesDetails from '../components/CaseStudiesDetails/CaseStudiesDetails'
import FooterThree from '../layouts/FooterThree'

export default {
    name: 'CaseStudiesDetailsPage',
    components: {
        NavbarStyleSeven,
        PageTitle,
        CaseStudiesDetails,
        FooterThree,
    }
}
</script>