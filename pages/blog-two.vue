<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Blog Grid (3 in Row)" />
        <BlogTwoContent />
        <FooterTwo/>
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import PageTitle from '../components/Common/PageTitle'
    import BlogTwoContent from '../components/BlogTwo/BlogTwoContent'
    import FooterTwo from '../layouts/FooterTwo'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            BlogTwoContent,
            FooterTwo,
        }
    }
</script>