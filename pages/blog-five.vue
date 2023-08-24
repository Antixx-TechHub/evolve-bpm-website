<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Blog Left Sidebar" />
        <BlogFiveContent />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import PageTitle from '../components/Common/PageTitle'
    import BlogFiveContent from '../components/BlogFive/BlogFiveContent'
    import FooterTwo from '../layouts/FooterTwo'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            BlogFiveContent,
            FooterTwo,
        }
    }
</script>