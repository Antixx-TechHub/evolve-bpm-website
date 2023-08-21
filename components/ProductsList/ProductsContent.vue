<template>
    <div class="products-area ptb-100">
        <div class="container">
            <div class="rivate-grid-sorting row align-items-center">
                <div class="col-lg-6 col-md-6 result-count">
                    <p>We found <span class="count">6</span> products available for you</p>
                </div>

                <div class="col-lg-6 col-md-6 ordering">
                    <div class="select-box">
                        <label>Sort By:</label>
                        <select>
                            <option>Default</option>
                            <option>Popularity</option>
                            <option>Latest</option>
                            <option>Price: low to high</option>
                            <option>Price: high to low</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="row">
                <div 
                    class="col-lg-4 col-md-6 col-sm-6"
                    v-for="product in products"
                    :key="product.id"
                >
                    <div class="single-products-box">
                        <div class="products-image">
                            <NuxtLink :to="`/products-details/${product.id}`">
                                <img :src="product.image" class="main-image" alt="image">
                            </NuxtLink>

                            <div class="products-button">
                                <ul>
                                    <li>
                                        <div class="wishlist-btn">
                                            <a href="#">
                                                <i class='bx bx-heart'></i>
                                                <span class="tooltip-label">Add to Wishlist</span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div v-if="product.sale" class="sale-tag">Sale!</div>
                        </div>

                        <div class="products-content">
                            <h3><NuxtLink :to="`/products-details/${product.id}`">{{product.name}}</NuxtLink></h3>
                            <div class="price">
                                <span class="old-price">${{product.price}}</span>
                                <span class="new-price">${{product.oldPrice}}</span>
                            </div>
                            <a 
                                v-if="getExistPId === product.id"
                                href="javascript:void(0)"
                                class="add-to-cart"
                                @click="addToCart(product)"
                            >
                                Already Added
                            </a>

                            <a 
                                v-else
                                href="javascript:void(0)"
                                class="add-to-cart"
                                @click="addToCart(product)"
                            >
                                Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="pagination-area text-center">
                        <a href="/products-list" class="prev page-numbers"><i class='bx bx-chevrons-left'></i></a>
                        <span class="page-numbers current" aria-current="page">1</span>
                        <a href="/products-list" class="page-numbers">2</a>
                        <a href="/products-list" class="page-numbers">3</a>
                        <a href="/products-list" class="page-numbers">4</a>
                        <a href="/products-list" class="next page-numbers"><i class='bx bx-chevrons-right'></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductsContent',

    data(){
        return {
            getExistPId: null
        }
    },

    computed: {
        products(){
            return this.$store.state.products.all
        },
        cart(){
            return this.$store.getters.cart
        }
    },
    
    methods: {
        addToCart(item){
            const product = [{
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: 1
            }]

            if(this.cart.length > 0){
                let id = item.id 
                this.getExistPId = id
                let cartIndex = this.cart.findIndex(cart => {
                    return cart.id == id
                })

                if(cartIndex == -1){
                    this.$store.dispatch('addToCart', product);
                    this.$toast("Added to cart", {
                        icon: 'bx bx-cart-alt'
                    });
                } else {
                    this.$store.dispatch('updateCart', {
                        id, unit: 1, cart: this.cart
                    });
                    this.$toast.info("Already added to the cart and update with one");
                }
            } else {
                this.$store.dispatch('addToCart', product)
                this.$toast("Added to cart",{
                    icon: 'bx bx-cart-alt'
                });
            }
        }
    }
}
</script>