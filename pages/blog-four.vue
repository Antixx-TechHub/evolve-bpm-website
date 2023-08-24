<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Blog Right Sidebar" />
        <BlogFourContent />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import PageTitle from '../components/Common/PageTitle'
    import BlogFourContent from '../components/BlogFour/BlogFourContent'
    import FooterTwo from '../layouts/FooterTwo'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            BlogFourContent,
            FooterTwo ,
        }
    }
</script>