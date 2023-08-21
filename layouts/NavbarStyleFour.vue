<template>
    <div :class="['navbar-area navbar-color-white', {'is-sticky': isSticky}]">
        <div class="rivate-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <NuxtLink class="navbar-brand" to="/">
                        <img src="~/assets/images/white-logo.png" alt="logo">
                    </NuxtLink>

                    <b-navbar-toggle target="navbarSupportedContent">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </b-navbar-toggle>

                    <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Home <i class='bx bx-chevron-down'></i>
                                </a>

                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            Home Demo - 1
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/home-two" class="nav-link">
                                            Home Demo - 2
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/home-three" class="nav-link">Home Demo - 3
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/home-four" class="nav-link">
                                            Home Demo - 4
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/home-five" class="nav-link">
                                            Home Demo - 5
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/home-six" class="nav-link">
                                            Home Demo - 6
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/home-seven" class="nav-link">
                                            Home Demo - 7
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/home-eight" class="nav-link">
                                            Home Demo - 8
                                            <span>New</span>
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/home-nine" class="nav-link">
                                            Home Demo - 9
                                            <span>New</span>
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/home-ten" class="nav-link">
                                            Home Demo - 10
                                            <span>New</span>
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/home-eleven" class="nav-link">
                                            Home Demo - 11
                                            <span>New</span>
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/home-tweleve" class="nav-link">
                                            Home Demo - 12
                                            <span>New</span>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    About 
                                    <i class='bx bx-chevron-down'></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><NuxtLink to="/about-one" class="nav-link">About Us 1</NuxtLink></li>

                                    <li class="nav-item"><NuxtLink to="/about-two" class="nav-link">About Us 2</NuxtLink></li>

                                    <li class="nav-item"><a href="#" class="nav-link">Team <i class='bx bx-chevron-right'></i></a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><NuxtLink to="/team-one" class="nav-link">Team 1</NuxtLink></li>
            
                                            <li class="nav-item"><NuxtLink to="/team-two" class="nav-link">Team 2</NuxtLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item"><a href="#" class="nav-link">Services <i class='bx bx-chevron-down'></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><NuxtLink to="/services-one" class="nav-link">Services One</NuxtLink></li>

                                    <li class="nav-item"><NuxtLink to="/services-two" class="nav-link">Services Two</NuxtLink></li>

                                    <li class="nav-item"><NuxtLink to="/services-three" class="nav-link">Services Three</NuxtLink></li>

                                    <li class="nav-item"><NuxtLink to="/services-details" class="nav-link">Services Details</NuxtLink></li>
                                </ul>
                            </li>

                            <li class="nav-item"><a href="#" class="nav-link">Pages <i class='bx bx-chevron-down'></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><NuxtLink to="/pricing" class="nav-link">Pricing</NuxtLink></li>

                                    <li class="nav-item"><a href="#" class="nav-link">Shop <i class='bx bx-chevron-right'></i></a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><NuxtLink to="/products-list" class="nav-link">Products List</NuxtLink></li>
            
                                            <li class="nav-item"><NuxtLink to="/cart" class="nav-link">Cart</NuxtLink></li>
    
                                            <li class="nav-item"><NuxtLink to="/checkout" class="nav-link">Checkout</NuxtLink></li>
    
                                            <li class="nav-item"><NuxtLink to="/products-details" class="nav-link">Products Details</NuxtLink></li>
                                        </ul>
                                    </li>

                                    <li class="nav-item"><NuxtLink to="/faq" class="nav-link">FAQ</NuxtLink></li>
                                    
                                    <li class="nav-item"><NuxtLink to="/profile-authentication" class="nav-link">Login/Register</NuxtLink></li>
    
                                    <li class="nav-item"><NuxtLink to="/privacy-policy" class="nav-link">Privacy Policy</NuxtLink></li>
    
                                    <li class="nav-item"><NuxtLink to="/terms-of-service" class="nav-link">Terms of Service</NuxtLink></li>
                                </ul>
                            </li>

                            <li class="nav-item"><a href="#" class="nav-link">Portfolio <i class='bx bx-chevron-down'></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a href="#" class="nav-link">Portfolio Style One <i class='bx bx-chevron-right'></i></a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><NuxtLink to="/portfolio-one" class="nav-link">Portfolio 2 Columns</NuxtLink></li>

                                            <li class="nav-item"><NuxtLink to="/portfolio-two" class="nav-link">Portfolio 3 Columns</NuxtLink></li>

                                            <li class="nav-item"><NuxtLink to="/portfolio-three" class="nav-link">Portfolio No Space</NuxtLink></li>
                                        </ul>
                                    </li>

                                    <li class="nav-item"><a href="#" class="nav-link">Portfolio Style Two <i class='bx bx-chevron-right'></i></a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><NuxtLink to="/portfolio-four" class="nav-link">Portfolio 2 Columns</NuxtLink></li>

                                            <li class="nav-item"><NuxtLink to="/portfolio-five" class="nav-link">Portfolio 3 Columns</NuxtLink></li>

                                            <li class="nav-item"><NuxtLink to="/portfolio-six" class="nav-link">Portfolio No Space</NuxtLink></li>
                                        </ul>
                                    </li>

                                    <li class="nav-item"><NuxtLink to="/portfolio-details" class="nav-link">Portfolio Details</NuxtLink></li>

                                    <li class="nav-item"><NuxtLink to="/case-studies" class="nav-link">Case studies</NuxtLink></li>
                                    <li class="nav-item"><NuxtLink to="/case-studies-details" class="nav-link">Case studies details</NuxtLink></li>
                                </ul>
                            </li>

                            <li class="nav-item"><a href="#" class="nav-link">Blog <i class='bx bx-chevron-down'></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><NuxtLink to="/blog-one" class="nav-link">Grid (2 in Row)</NuxtLink></li>

                                    <li class="nav-item"><NuxtLink to="/blog-two" class="nav-link">Grid (3 in Row)</NuxtLink></li>

                                    <li class="nav-item"><NuxtLink to="/blog-three" class="nav-link">Grid (Full Width)</NuxtLink></li>

                                    <li class="nav-item"><NuxtLink to="/blog-four" class="nav-link">Right Sidebar</NuxtLink></li>

                                    <li class="nav-item"><NuxtLink to="/blog-five" class="nav-link">Left Sidebar</NuxtLink></li>

                                    <li class="nav-item"><a href="#" class="nav-link">Single Post <i class='bx bx-chevron-right'></i></a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><NuxtLink to="/blog-details-one" class="nav-link">Default</NuxtLink></li>
                                            
                                            <li class="nav-item"><NuxtLink to="/blog-details-two" class="nav-link">With Video</NuxtLink></li>
                                            
                                            <li class="nav-item"><NuxtLink to="/blog-details-three" class="nav-link">With Image Slider</NuxtLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item"><NuxtLink to="/contact" class="nav-link">Contact</NuxtLink></li>
                        </ul>
                    </b-collapse>

                    <div class="others-option d-flex align-items-center">
                        <div class="option-item">
                            <div class="cart-btn">
                                <NuxtLink to="/cart">
                                    <i class="flaticon-shopping-cart"></i>
                                    <span>{{cart.length}}</span>
                                </NuxtLink>
                            </div>
                        </div>

                        <div class="option-item">
                            <div class="search-box" v-on:click="isSearchMethod(isSearch)">
                                <i class="flaticon-search"></i>
                            </div>
                        </div>

                        <div class="search-overlay" v-if="isSearch">
                            <div class="d-table">
                                <div class="d-table-cell">
                                    <div class="search-overlay-layer"></div>
                                    <div class="search-overlay-layer"></div>
                                    <div class="search-overlay-layer"></div>
                                    
                                    <div class="search-overlay-close" v-on:click="isSearchMethod(isSearch)">
                                        <span class="search-overlay-close-line"></span>
                                        <span class="search-overlay-close-line"></span>
                                    </div>

                                    <div class="search-overlay-form">
                                        <form>
                                            <input type="text" class="input-search" placeholder="Search here...">
                                            <button type="submit"><i class="flaticon-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavbarStyleFour',
        data(){
            return {
                isSticky: false,
                isSearch: false
            }
        },

        mounted(){
            const that = this
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 100){
                    that.isSticky = true
                } else {
                    that.isSticky = false
                }
            })
        },

        computed: {
            cart(){
                return this.$store.getters.cart
            }
        },

        methods: {
            isSearchMethod(isSearch){
                console.log(this.isSearch)
                return this.isSearch = !isSearch
            }
        }
    }
</script>