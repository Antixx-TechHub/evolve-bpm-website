<template>
    <div>
        <NavbarStyleTwo class="rivate-new-navbar-area" />
        <PageTitle pageTitle="Services" />
        <ServicesContent />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import PageTitle from '../components/Common/PageTitle'
    import ServicesContent from '../components/ServicesOne/ServicesContent'
    import FooterTwo from '../layouts/FooterTwo'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            ServicesContent,
            FooterTwo,
        }
    }
</script>