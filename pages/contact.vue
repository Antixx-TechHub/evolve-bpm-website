<template>
    <div>
        <NavbarStyleTwo/>
        <PageTitle pageTitle="Contact Us" />
        <ContactInfo />
        <ContactContent />
        <Map />
        <FooterTwo/>
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import ContactInfo from '../components/ContactUs/ContactInfo'
    import ContactContent from '../components/ContactUs/ContactContent'
    import Map from '../components/ContactUs/Map'
    import FooterTwo from '../layouts/Footer'

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