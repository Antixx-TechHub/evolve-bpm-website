<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Blog Left Sidebar" />
        <BlogFiveContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import BlogFiveContent from '../components/BlogFive/BlogFiveContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            BlogFiveContent,
            Footer,
        }
    }
</script>