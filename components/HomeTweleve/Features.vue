<template>
    <div class="ds-features-area ptb-100">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-7 col-md-12">
                    <div class="ds-features-content">
                        <span>Core features</span>
                        <h3>Are you ready for a better, more nice productive business</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit illo ducimus vero vero corporis voluptates beatae pariatur laudantium fugiat illum deserunt nostrum aliquid quisquam ess voluptatibus quia velit numquam esse porro ipsum dolor sit amet consectetur.</p>
                        <div class="row justify-content-center">
                            <div class="col-lg-6 col-sm-6">
                                <ul class="list">
                                    <li><i class='bx bx-check-circle'></i> Robotics</li>
                                    <li><i class='bx bx-check-circle'></i> Real time tracking</li>
                                    <li><i class='bx bx-check-circle'></i> Customer support</li>
                                </ul>
                            </div>

                            <div class="col-lg-6 col-sm-6">
                                <ul class="list">
                                    <li><i class='bx bx-check-circle'></i> Testing code</li>
                                    <li><i class='bx bx-check-circle'></i> Multi matrix code</li>
                                    <li><i class='bx bx-check-circle'></i> Machine learning</li>
                                </ul>
                            </div>
                        </div>
                        <div class="features-btn">
                            <NuxtLink to="/contact" class="default-btn">Get started <i class='flaticon-chevron'></i></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-5 col-md-12">
                    <div class="ds-features-image">
                        <img src="~/assets/images/data-science/features.png" alt="image">
                    </div>
                </div>
            </div>
        </div>

        <div class="ds-features-shape">
            <img src="~/assets/images/data-science/dot-shape.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Features'
}
</script>