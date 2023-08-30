<template>
    <div :class="['navbar-area navbar-color-white', { 'is-sticky': isSticky }]">
        <div class="rivate-nav">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <NuxtLink class="navbar-brand" to="/#">
                        <img src="~/assets/images/newlogo.svg" alt="logo">
                    </NuxtLink>

                    <b-navbar-toggle target="navbarSupportedContent">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </b-navbar-toggle>

                    <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NuxtLink to="/" class="nav-link">Home</NuxtLink>
                            </li>

                            <li class="nav-item">
                                <NuxtLink to="" class="nav-link">Company</NuxtLink>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/about-us" class="nav-link">About Us</NuxtLink>
                                    </li>
                                    <li class="nav-item"><a href="team" class="nav-link">Team</a>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item"><a href="services" class="nav-link">Services</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/services-details" class="nav-link">Services Details</NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <NuxtLink to="/portfolio" class="nav-link">Portfolio</NuxtLink>
                            </li>

                            <li class="nav-item">
                                <NuxtLink to="" class="nav-link">Resources</NuxtLink>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/blogs" class="nav-link">Blogs</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/glossaries" class="nav-link">Glossaries</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/success-stories" class="nav-link">Success Story</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/case-studies" class="nav-link">Case Study</NuxtLink>
                                    </li>
                                </ul>

                            </li>

                            <li class="nav-item">
                                <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
                            </li>
                        </ul>
                    </b-collapse>

                    <div class="others-option d-flex align-items-center">
                        <div class="option-item">
                            <div class="cart-btn">
                                <NuxtLink to="/cart">
                                    <i class="flaticon-shopping-cart"></i>
                                    <span>{{ cart.length }}</span>
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
    name: 'NavbarStyleTwo',
    data() {
        return {
            isSticky: false,
            isSearch: false
        }
    },

    mounted() {
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if (scrollPos >= 100) {
                that.isSticky = true
            } else {
                that.isSticky = false
            }
        })
    },
    computed: {
        cart() {
            return this.$store.getters.cart
        }
    },

    methods: {
        isSearchMethod(isSearch) {
            console.log(this.isSearch)
            return this.isSearch = !isSearch
        }
    }
}
</script>