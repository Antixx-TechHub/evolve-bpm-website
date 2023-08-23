<template>
    <div>
        <NavbarStyleTwo class="rivate-new-navbar-area" />
        <PageTitle pageTitle="Privacy Policy" />
        <PrivacyPolicyContent />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import PageTitle from '../components/Common/PageTitle'
    import PrivacyPolicyContent from '../components/PrivacyPolicy/PrivacyPolicyContent'
    import FooterTwo from '../layouts/FooterTwo'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            PrivacyPolicyContent,
            FooterTwo,
        }
    }
</script>