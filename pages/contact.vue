<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Contact Us" />
        <ContactInfo />
        <ContactContent />
        <Map />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import PageTitle from '../components/Common/PageTitle'
    import ContactInfo from '../components/ContactUs/ContactInfo'
    import ContactContent from '../components/ContactUs/ContactContent'
    import Map from '../components/ContactUs/Map'
    import FooterTwo from '../layouts/FooterTwo'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            ContactInfo,
            ContactContent,
            Map,
            FooterTwo,
        }
    }
</script>