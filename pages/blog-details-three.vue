<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Blog Details" />
        <BlogDetailsContentThree />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/NavbarStyleFour'
    import PageTitle from '../components/Common/PageTitle'
    import BlogDetailsContentThree from '../components/BlogDetailsThree/BlogDetailsContentThree'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            BlogDetailsContentThree,
            Footer,
        }
    }
</script>