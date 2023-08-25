<template>
    <div>
        <NavbarStyleFour />
        <PageTitle pageTitle="Cart" />
        <CartContent />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import CartContent from '../components/Cart/CartContent'
    import Footer from '../layouts/Footer'

    export default {
        components: {
            NavbarStyleFour,
            PageTitle,
            CartContent,
            Footer,
        }
    }
</script>