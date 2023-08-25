<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Terms Of Service" />
        <TermsOfServiceContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import TermsOfServiceContent from '../components/TermsOfService/TermsOfServiceContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            TermsOfServiceContent,
            Footer,
        }
    }
</script>