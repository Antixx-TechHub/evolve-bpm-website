<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Terms Of Service" />
        <TermsOfServiceContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/NavbarStyleFour'
    import PageTitle from '../components/Common/PageTitle'
    import TermsOfServiceContent from '../components/TermsOfService/TermsOfServiceContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            TermsOfServiceContent,
            Footer,
        }
    }
</script>