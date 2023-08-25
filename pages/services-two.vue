<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Services" />
        <ServicesContentTwo />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import ServicesContentTwo from '../components/ServicesTwo/ServicesContentTwo'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            ServicesContentTwo,
            Footer,
        }
    }
</script>