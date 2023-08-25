<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Privacy Policy" />
        <PrivacyPolicyContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import PrivacyPolicyContent from '../components/PrivacyPolicy/PrivacyPolicyContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            PrivacyPolicyContent,
            Footer,
        }
    }
</script>