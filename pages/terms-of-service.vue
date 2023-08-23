<template>
    <div>
        <NavbarStyleTwo class="rivate-new-navbar-area" />
        <PageTitle pageTitle="Terms Of Service" />
        <TermsOfServiceContent />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import PageTitle from '../components/Common/PageTitle'
    import TermsOfServiceContent from '../components/TermsOfService/TermsOfServiceContent'
    import FooterTwo from '../layouts/FooterTwo'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            TermsOfServiceContent,
            FooterTwo,
        }
    }
</script>