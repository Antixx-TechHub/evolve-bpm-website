<template>
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h1>{{pageTitle}}</h1>
            </div>
        </div>

        <div class="shape2"><img src="~/assets/images/shape/shape2.png" alt="image"></div>
        <div class="shape3"><img src="~/assets/images/shape/shape3.png" alt="image"></div>
        <div class="shape5"><img src="~/assets/images/shape/shape5.png" alt="image"></div>
        <div class="shape6"><img src="~/assets/images/shape/shape6.png" alt="image"></div>
        <div class="shape7"><img src="~/assets/images/shape/shape7.png" alt="image"></div>
        <div class="shape8"><img src="~/assets/images/shape/shape8.png" alt="image"></div>
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PageTitle',
    props: ['pageTitle']
}
</script>