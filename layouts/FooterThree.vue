<template>
    <footer class="footer-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <NuxtLink to="/" class="logo">
                            <img src="~/assets/images/white-logo.png" alt="logo">
                        </NuxtLink>
                        <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit eiusmod tempor incididunt labore dolore magna aliqua consec elite sed do labor.</p>
                        <ul class="social-link">
                            <li><a href="https://www.facebook.com/" class="d-block" target="_blank"><i class='bx bxl-facebook'></i></a></li>
                            <li><a href="https://twitter.com/" class="d-block" target="_blank"><i class='bx bxl-twitter'></i></a></li>
                            <li><a href="https://www.instagram.com/" class="d-block" target="_blank"><i class='bx bxl-instagram'></i></a></li>
                            <li><a href="https://www.linkedin.com/" class="d-block" target="_blank"><i class='bx bxl-linkedin'></i></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget ps-5">
                        <h3>Other pages</h3>

                        <ul class="footer-links-list">
                            <li><NuxtLink to="/">Home</NuxtLink></li>
                            <li><NuxtLink to="/about-one">About us</NuxtLink></li>
                            <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
                            <li><NuxtLink to="/portfolio-one">Portfolio</NuxtLink></li>
                            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget ps-5">
                        <h3>Helpful links</h3>

                        <ul class="footer-links-list">
                            <li><NuxtLink to="/services-one">Marketing strategy</NuxtLink></li>
                            <li><NuxtLink to="/services-one">Interior design</NuxtLink></li>
                            <li><NuxtLink to="/services-one">Digital services</NuxtLink></li>
                            <li><NuxtLink to="/services-one">Product design</NuxtLink></li>
                            <li><NuxtLink to="/services-one">Social marketing</NuxtLink></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget ps-5">
                        <h3>Support</h3>

                        <ul class="footer-links-list">
                            <li><NuxtLink to="/privacy-policy">Privacy policy</NuxtLink></li>
                            <li><NuxtLink to="/terms-of-service">Terms & uses</NuxtLink></li>
                            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                            <li><NuxtLink to="/contact">Community</NuxtLink></li>
                            <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget ps-5">
                        <h3>Official info</h3>

                        <ul class="footer-contact-info">
                            <li>
                                <i class='bx bx-map'></i>
                                <span>Location:</span>
                                2976 sunrise road las vegas
                            </li>
                            <li>
                                <i class='bx bx-envelope'></i>
                                <span>Email:</span>
                                <a href="mailto:hello@rivate.com">hello@rivate.com</a>
                            </li>
                            <li>
                                <i class='bx bxs-phone'></i>
                                <span>Phone:</span>
                                <a href="tell:098765432150">098765432150</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom-area">
            <p>All right reserved design by <a href="https://envytheme.com/" target="_blank">EnvyTheme.com</a></p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterThree'
}
</script>