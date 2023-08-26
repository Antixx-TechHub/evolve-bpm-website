<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Glossaries" />
        <GlossaryPage/>
        <FooterTwo/>
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import GlossaryPage from '../components/Glossary/GlossaryPage'
    import FooterTwo from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            GlossaryPage,
            FooterTwo,
        }
    }
</script>