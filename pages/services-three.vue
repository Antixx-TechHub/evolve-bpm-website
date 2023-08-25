<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Services" />
        <ServicesContentThree />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import ServicesContentThree from '../components/ServicesThree/ServicesContentThree'
    import Footer from '../layouts/Footer'
  
    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            ServicesContentThree,
            Footer,
        }
    }
</script>