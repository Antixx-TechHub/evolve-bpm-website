<template>
    <footer class="footer-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <NuxtLink to="/" class="logo">
                            <img src="~/assets/images/newlogo.svg" alt="logo">
                        </NuxtLink>
                        <p>EvolveBPM is a new generation provider of
                            disruptive Revenue Growth (RG) solutions for
                            the global B2B market.</p>

                        <ul class="social-link">
                            <li><a href="https://www.facebook.com/EvolveBPM/" class="d-block" target="_blank"><i
                                        class='bx bxl-facebook'></i></a></li>
                            <li><a href="https://twitter.com/evolvebpm" class="d-block" target="_blank"><i
                                        class='bx bxl-twitter'></i></a></li>
                            <li><a href="https://www.instagram.com/evolvebpm/" class="d-block" target="_blank"><i
                                        class='bx bxl-instagram'></i></a></li>
                            <li><a href="https://www.linkedin.com/company/evolve-bpm/" class="d-block" target="_blank"><i
                                        class='bx bxl-linkedin'></i></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-5">
                        <h3>Explore</h3>

                        <ul class="footer-links-list">
                            <li>
                                <NuxtLink to="/">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about-one">About</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/pricing">Pricing</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/portfolio-two">Portfolio</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contact">Contact</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-2">
                        <h3>Resources</h3>

                        <ul class="footer-links-list">
                            <li>
                                <NuxtLink to="/team-two">Team</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contact">Contact</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/services-one">Services</NuxtLink>
                            </li>
                            <!-- <li>
                                <NuxtLink to="/faq">FAQ</NuxtLink>
                            </li> -->
                            <li>
                                <NuxtLink to="/blog-one">Blog</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Address</h3>

                        <ul class="footer-contact-info">
                            <li><i class='bx bx-map'></i>EvolveBPM, LLC (Global Headquarters) 99 Wall Street #3966 New York,
                                NY 10005</li>
                            <li><i class='bx bx-phone-call'></i><a href="tel:+11234567890">+91-020-69029999</a></li>
                            <li><i class='bx bx-envelope'></i><a href="mailto:hello@rivate.com">corporate@evolvebpm.com</a>
                            </li>
                            <!-- <li><i class='bx bxs-inbox'></i><a href="tel:+557854578964">+55 785 4578964</a></li> -->
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer-bottom-area">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <p><i class='bx bx-copyright'></i> <strong>2023 EvolveBPM,</strong> LLC. All rights reserved.</p>
                    </div>

                    <div class="col-lg-6 col-md-6">
                        <ul>
                            <li>
                                <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/terms-of-service">Terms & Conditions</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="shape16"><img src="~/assets/images/more-home/footer/shape.png" alt="image"></div>
    </footer>
</template>

<script>
export default {
    name: 'FooterTwo'
}
</script>