<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Blog Grid (Full Width)" />
        <BlogThreeContent />
        <FooterTwo/>
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import PageTitle from '../components/Common/PageTitle'
    import BlogThreeContent from '../components/BlogThree/BlogThreeContent'
    import FooterTwo from '../layouts/FooterTwo'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            BlogThreeContent,
            FooterTwo,
        }
    }
</script>