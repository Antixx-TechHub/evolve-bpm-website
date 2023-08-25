<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Services" />
        <ServicesContent />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import ServicesContent from '../components/ServicesOne/ServicesContent'
    import FooterTwo from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            ServicesContent,
            FooterTwo,
        }
    }
</script>