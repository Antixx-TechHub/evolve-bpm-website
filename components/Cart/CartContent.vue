<template>
    <div class="cart-area ptb-100">
        <div class="container">
            <form v-if="cart.length > 0">
                <div class="cart-table table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Name</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="(cart, i) in cart" :key="i">
                                <td class="product-thumbnail">
                                    <NuxtLink :to="`/products-details/${cart.id}`">
                                        <img :src="cart.image" :alt="cart.name" />
                                    </NuxtLink>
                                </td>

                                <td class="product-name">
                                    <NuxtLink :to="`/products-details/${cart.id}`">
                                         {{cart.name}}
                                    </NuxtLink>
                                </td>

                                <td class="product-price">
                                    <span class="unit-amount">${{cart.price}}</span>
                                </td>

                                <td class="product-quantity">
                                    <div class="input-counter">
                                        <span 
                                            @click="onDecrement(cart.id, cart.quantity)"
                                            class="minus-btn">
                                            <i class='bx bx-minus'></i>
                                        </span>
                                            {{cart.quantity}}
                                        <span 
                                            @click="onIncrement(cart.id)" 
                                            class="plus-btn">
                                            <i class='bx bx-plus'></i>
                                        </span>
                                    </div>
                                </td>

                                <td class="product-subtotal">
                                    <span class="subtotal-amount">
                                        ${{cart.price * cart.quantity}}
                                    </span>

                                    <a 
                                        href="javascript:void(0)" 
                                        @click="removeItemFromCart(cart.id)"
                                        class="remove"
                                    >
                                        <i class='bx bx-trash'></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="cart-buttons">
                    <div class="row align-items-center">
                        <div class="col-lg-7 col-sm-7 col-md-7">
                            <div class="shopping-coupon-code">
                                <input type="text" class="form-control" placeholder="Coupon code" name="coupon-code" id="coupon-code">
                                <button type="submit">Apply Coupon</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cart-totals">
                    <h3>Cart Totals</h3>

                    <ul>
                        <li>Subtotal <span>${{cartTotal}}</span></li>
                        <li>Shipping <span>$1.00</span></li>
                        <li>Total <span>${{parseFloat(cartTotal + 1).toFixed(2)}}</span></li>
                    </ul>

                    <NuxtLink to="/checkout" class="default-btn">Proceed to Checkout</NuxtLink>
                </div>
            </form>

            <div v-else>
                <h2>Cart Is Empty!</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartContent',
    computed: {
        cart(){
            return this.$store.getters.cart
        },
        cartTotal(){
            return this.$store.getters.totalAmount
        }
    }, 
    methods: {
        removeItemFromCart(id){
            this.$store.dispatch('deleteCart', id)
        },
        onIncrement(id){
            this.$store.dispatch('updateCart', {
                id,
                unit: 1,
                cart: this.cart
            })
        },
        onDecrement(id, quantity){
            if (quantity > 1) {
                this.$store.dispatch('updateCart', {
                    id,
                    unit: -1,
                    cart: this.cart
                })
            } else {
                this.removeItemFromCart(id);
                this.$toast.warning("Item deleted!");
            }
        },
    }
}
</script>