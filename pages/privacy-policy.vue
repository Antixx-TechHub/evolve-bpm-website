<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Privacy Policy" />
        <PrivacyPolicyContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/NavbarStyleFour'
    import PageTitle from '../components/Common/PageTitle'
    import PrivacyPolicyContent from '../components/PrivacyPolicy/PrivacyPolicyContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            PrivacyPolicyContent,
            Footer,
        }
    }
</script>