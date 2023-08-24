<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Blog Grid (2 in Row)" />
        <BlogOneContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/NavbarStyleFour'
    import PageTitle from '../components/Common/PageTitle'
    import BlogOneContent from '../components/BlogOne/BlogOneContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            BlogOneContent,
            Footer,
        }
    }
</script>