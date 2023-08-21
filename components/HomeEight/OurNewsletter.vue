<template>
    <div class="rivate-subscribe-area pb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8 col-md-12">
                    <div class="rivate-subscribe-content wow animate__animated animate__fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                        <span class="sub-title">RIVATE UPDATES</span>
                        <h2>Subscribe To Our Newsletter</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <form class="newsletter-form">
                            <input type="text" class="input-newsletter" placeholder="Enter your email address" name="EMAIL">
                            <button type="submit" class="default-btn-with-radius">
                                Subscribe Now 
                                <i class="flaticon-next-button"></i>
                            </button>
                        </form>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="rivate-subscribe-image">
                        <img src="~/assets/images//more-home/subscribe/subscribe.png" alt="image">
                    </div>
                </div>
            </div>
        </div>

        <div class="rivate-subscribe-vector-shape">
            <img src="~/assets/images//more-home/subscribe/vector-shape.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurNewsletter'
}
</script>