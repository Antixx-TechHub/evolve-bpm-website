<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Products List" />
        <ProductsContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import ProductsContent from '../components/ProductsList/ProductsContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            ProductsContent,
            Footer,
        }
    }
</script>