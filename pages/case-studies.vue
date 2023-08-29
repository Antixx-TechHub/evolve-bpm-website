<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Case Studies" />
        <CaseStudiesMain />
        <FooterTwo/>
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import CaseStudiesMain from '../components/CaseStudies/CaseStudiesMain'
    import FooterTwo from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            CaseStudiesMain,
            FooterTwo,
        }
    }
</script>