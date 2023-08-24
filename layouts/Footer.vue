<template>
    <footer class="footer-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <NuxtLink to="/" class="logo">
                            <img src="~/assets/images/white-logo.png" alt="logo">
                        </NuxtLink>
                        <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                        <ul class="social-link">
                            <li><a href="https://www.facebook.com/" class="d-block" target="_blank"><i class='bx bxl-facebook'></i></a></li>
                            <li><a href="https://twitter.com/" class="d-block" target="_blank"><i class='bx bxl-twitter'></i></a></li>
                            <li><a href="https://www.instagram.com/" class="d-block" target="_blank"><i class='bx bxl-instagram'></i></a></li>
                            <li><a href="https://www.linkedin.com/" class="d-block" target="_blank"><i class='bx bxl-linkedin'></i></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-5">
                        <h3>Explore</h3>

                        <ul class="footer-links-list">
                            <li><NuxtLink to="/">Home</NuxtLink></li>
                            <li><NuxtLink to="/about-one">About</NuxtLink></li>
                            <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
                            <li><NuxtLink to="/portfolio-one">Portfolio</NuxtLink></li>
                            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-2">
                        <h3>Resources</h3>

                        <ul class="footer-links-list">
                            <li><NuxtLink to="/team-one">Team</NuxtLink></li>
                            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                            <li><NuxtLink to="/services-one">Services</NuxtLink></li>
                            <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
                            <li><NuxtLink to="/blog-one">Blog</NuxtLink></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Address</h3>

                        <ul class="footer-contact-info">
                            <li><i class='bx bx-map'></i>175 5th Ave Premium Area, New York, NY 10010, United States</li>
                            <li><i class='bx bx-phone-call'></i><a href="tel:+11234567890">+1 (123) 456 7890</a></li>
                            <li><i class='bx bx-envelope'></i><a href="mailto:hello@rivate.com">hello@rivate.com</a></li>
                            <li><i class='bx bxs-inbox'></i><a href="tel:+557854578964">+55 785 4578964</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer-bottom-area">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <p><i class='bx bx-copyright'></i> {{currentYear}} <strong>Rivate</strong> is Proudly Powered by <a target="_blank" href="https://envytheme.com/">EnvyTheme</a></p>
                    </div>

                    <div class="col-lg-6 col-md-6">
                        <ul>
                            <li><NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink></li>
                            <li><NuxtLink to="/terms-of-service">Terms & Conditions</NuxtLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="shape16"><img src="~/assets/images/shape/shape16.png" alt="image"></div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    }
}
</script>