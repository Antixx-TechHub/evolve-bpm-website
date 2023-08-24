<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Services" />
        <ServicesContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/NavbarStyleFour'
    import PageTitle from '../components/Common/PageTitle'
    import ServicesContent from '../components/ServicesOne/ServicesContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            ServicesContent,
            Footer,
        }
    }
</script>