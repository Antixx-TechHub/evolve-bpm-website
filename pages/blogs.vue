<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Blogs" />
        <FeaturedBlogMain />
        <BlogTwoContent />
        <FooterTwo/>
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import FeaturedBlogMain from '../components/BlogTwo/FeaturedBlogMain'
    import BlogTwoContent from '../components/BlogTwo/BlogTwoContent'
    import FooterTwo from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            FeaturedBlogMain,
            BlogTwoContent,
            FooterTwo,
        }
    }
</script>