<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Blog Grid (3 in Row)" />
        <BlogTwoContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/NavbarStyleFour'
    import PageTitle from '../components/Common/PageTitle'
    import BlogTwoContent from '../components/BlogTwo/BlogTwoContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            BlogTwoContent,
            Footer,
        }
    }
</script>