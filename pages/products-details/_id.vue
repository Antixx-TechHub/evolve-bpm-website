<template>
    <div>
        <NavbarStyleFour />
        <PageTitle :pageTitle="product.name" />
        <ProductsDetailsContent 
            :id = "product.id"
            :name = "product.name" 
            :price = "product.price"
            :oldPrice = "product.oldPrice"
            :image = "product.image"
        />
        <Footer />
    </div>
</template>

<script>
    import NavbarStyleFour from '../../layouts/Navbar'
    import PageTitle from '../../components/Common/PageTitle'
    import ProductsDetailsContent from '../../components/ProductsDetails/ProductsDetailsContent'
    import Footer from '../../layouts/Footer'

    export default {
        components: { 
            NavbarStyleFour,
            PageTitle,
            ProductsDetailsContent,
            Footer,
        },

        data() {
            return {
                text: '',
                message: '',
                id: this.$route.params.id
            }
        },

        methods:{
            send(){
                this.message = this.text
                this.text = ''
            }
        },

        provide() {
            return { myText: 'Product Details'}
        },

        computed: {
            product(){
                return this.$store.state.products.all.find(product => product.id === this.id);
            }
        }
    }
</script>