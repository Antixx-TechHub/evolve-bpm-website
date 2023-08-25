<template>
    <div class="startup-it-agency-color-css">
        <NavbarStyleTwo />
        <PageTitle />
        <CaseStudy />
        <FooterTwo />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/Navbar'
import PageTitle from '../components/CaseStudies/PageTitle'
import CaseStudy from '../components/CaseStudies/CaseStudy'
import FooterTwo from '../layouts/Footer'

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