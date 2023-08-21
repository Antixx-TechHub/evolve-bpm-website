<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Blog Details" />
        <BlogDetailsContentOne />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/NavbarStyleFour'
    import PageTitle from '../components/Common/PageTitle'
    import BlogDetailsContentOne from '../components/BlogDetailsOne/BlogDetailsContentOne'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            BlogDetailsContentOne,
            Footer,
        }
    }
</script>