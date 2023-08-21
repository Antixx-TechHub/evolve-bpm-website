<template>
    <header class="top-header-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6">
                    <ul class="top-header-contact-info">
                        <li><i class='bx bx-phone-call'></i> <a href="tel:+14854560102">+1-485-456-0102</a></li>
                        <li><i class='bx bx-envelope'></i> <a href="mailto:hello@rivate.com">hello@rivate.com</a></li>
                    </ul>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="top-header-btn">
                        <NuxtLink to="/contact" class="default-btn">Free Site Analysis</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'TopHeaderOne'
}
</script>