<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Team" />
        <TeamContentTwo />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/NavbarStyleFour'
    import PageTitle from '../components/Common/PageTitle'
    import TeamContentTwo from '../components/TeamTwo/TeamContentTwo'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            TeamContentTwo,
            Footer,
        }
    }
</script>