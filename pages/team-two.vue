<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Team" />
        <TeamContentTwo />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import PageTitle from '../components/Common/PageTitle'
    import TeamContentTwo from '../components/TeamTwo/TeamContentTwo'
    import FooterTwo from '../layouts/FooterTwo'

    export default {
        components: {
            NavbarStyleTwo,
            PageTitle,
            TeamContentTwo,
            FooterTwo,
        }
    }
</script>