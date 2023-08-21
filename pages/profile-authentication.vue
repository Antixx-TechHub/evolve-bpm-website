<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Welcome to Rivate" />
        <ProfileAuthenticationContant />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/NavbarStyleFour'
    import PageTitle from '../components/Common/PageTitle'
    import ProfileAuthenticationContant from '../components/ProfileAuthentication/ProfileAuthenticationContant'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            ProfileAuthenticationContant,
            Footer,
        }
    }
</script>