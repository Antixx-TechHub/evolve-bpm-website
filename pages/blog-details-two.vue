<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Blog Details" />
        <BlogDetailsContentTwo />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import BlogDetailsContentTwo from '../components/BlogDetailsTwo/BlogDetailsContentTwo'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            BlogDetailsContentTwo,
            Footer,
        }
    }
</script>