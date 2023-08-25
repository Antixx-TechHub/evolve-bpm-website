<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Blog Right Sidebar" />
        <BlogFourContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import BlogFourContent from '../components/BlogFour/BlogFourContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            BlogFourContent,
            Footer,
        }
    }
</script>