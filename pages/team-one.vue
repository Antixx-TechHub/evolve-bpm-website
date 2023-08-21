<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Team" />
        <TeamContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/NavbarStyleFour'
    import PageTitle from '../components/Common/PageTitle'
    import TeamContent from '../components/TeamOne/TeamContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            TeamContent,
            Footer,
        }
    }
</script>