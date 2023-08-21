<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Contact Us" />
        <ContactInfo />
        <ContactContent />
        <Map />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/NavbarStyleFour'
    import PageTitle from '../components/Common/PageTitle'
    import ContactInfo from '../components/ContactUs/ContactInfo'
    import ContactContent from '../components/ContactUs/ContactContent'
    import Map from '../components/ContactUs/Map'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            ContactInfo,
            ContactContent,
            Map,
            Footer,
        }
    }
</script>