<template>
    <div class="rivate-what-we-do-area bg-F7F8FF">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="rivate-what-we-do-content">
                        <span>WHAT WE DO</span>
                        <h3>We Help to Website Growth With Next Level Visitor</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida.</p>

                        <div class="accordion" role="tablist">
                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1">
                                    <b-button class="accordion-title" block v-b-toggle.accordion-1 variant="info">
                                        <i class="flaticon-plus"></i>
                                        <i class="flaticon-minus"></i>
                                        Social Media Optimization
                                        <span></span>
                                    </b-button>
                                </b-card-header>
                                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1">
                                    <b-button class="accordion-title" block v-b-toggle.accordion-2 variant="info">
                                        <i class="flaticon-plus"></i>
                                        <i class="flaticon-minus"></i>
                                        Content Generation
                                        <span></span>
                                    </b-button>
                                </b-card-header>
                                <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1">
                                    <b-button class="accordion-title" block v-b-toggle.accordion-3 variant="info">
                                        <i class="flaticon-plus"></i>
                                        <i class="flaticon-minus"></i>
                                        Pay Per Click Services
                                        <span></span>
                                    </b-button>
                                </b-card-header>
                                <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="rivate-what-we-do-image"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WhatWeDo',
}
</script>