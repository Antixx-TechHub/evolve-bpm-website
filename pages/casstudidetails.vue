<template>
    <div class="startup-it-agency-color-css">
        <NavbarStyleTwo />
        <PageTitle />
        <CaseStudiesDetails />
        <FooterTwo />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/Navbar'
import PageTitle from '../components/CaseStudiesDetails/PageTitle'
import CaseStudiesDetails from '../components/CaseStudiesDetails/CaseStudiesDetails'
import FooterTwo from '../layouts/Footer'

export default {
    name: 'CaseStudiesDetailsPage',
    components: {
        NavbarStyleTwo,
        PageTitle,
        CaseStudiesDetails,
        FooterTwo,
    }
}
</script>