<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Success Stories" />
        <SuccessStories />
        <FooterTwo/>
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import SuccessStories from '../components/SuccessStories/SuccessStories'
    import FooterTwo from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            SuccessStories,
            FooterTwo,
        }
    }
</script>