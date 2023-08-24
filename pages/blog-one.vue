<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Blog Grid (2 in Row)" />
        <BlogOneContent />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import PageTitle from '../components/Common/PageTitle'
    import BlogOneContent from '../components/BlogOne/BlogOneContent'
    import FooterTwo from '../layouts/FooterTwo'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            BlogOneContent,
            FooterTwo,
        }
    }
</script>