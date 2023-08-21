<template>
    <div class="ds-subscribe-area">
        <div class="container">
            <div class="ds-subscribe-inner-box ptb-100">
                <div class="ds-subscribe-content">
                    <span class="sub-title">Subscribe our newsletter</span>
                    <h2>Get latest update and news first</h2>

                    <form class="newsletter-form">
                        <input type="text" class="input-newsletter" placeholder="Enter your email" name="EMAIL" required>
                        <button type="submit" class="default-btn">Subscribe</button>
                    </form>
                </div>
                <div class="subscribe-shape">
                    <img src="~/assets/images/data-science/subscribe-shape.png" alt="image">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Subscribe'
}
</script>