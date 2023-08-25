<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Blog Details" />
        <BlogDetailsContentOne />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import PageTitle from '../components/Common/PageTitle'
    import BlogDetailsContentOne from '../components/BlogDetailsOne/BlogDetailsContentOne'
    import FooterTwo from '../layouts/FooterTwo'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            BlogDetailsContentOne,
            FooterTwo,
        }
    }
</script>