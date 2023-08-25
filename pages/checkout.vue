<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Checkout" />
        <CheckoutContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import CheckoutContent from '../components/Checkout/CheckoutContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            CheckoutContent,
            Footer,
        }
    }
</script>