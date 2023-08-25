<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Blog Grid (Full Width)" />
        <BlogThreeContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import BlogThreeContent from '../components/BlogThree/BlogThreeContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            BlogThreeContent,
            Footer,
        }
    }
</script>