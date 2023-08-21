<template>
    <div>
        <b-modal id="modal-1">
            <div class="sidebar-modal-inner">
                <div class="modal-sidebar-content">
                    <div class="logo">
                        <NuxtLink to="/" class="d-inline-block"><img src="~/assets/images/logo.png" alt="image"></NuxtLink>
                    </div>

                    <div class="instagram-list">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-6">
                                <div class="box">
                                    <img src="~/assets/images/team/team-img1.jpg" alt="image">
                                    <i class='bx bxl-instagram'></i>
                                    <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-4 col-6">
                                <div class="box">
                                    <img src="~/assets/images/team/team-img2.jpg" alt="image">
                                    <i class='bx bxl-instagram'></i>
                                    <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-4 col-6">
                                <div class="box">
                                    <img src="~/assets/images/team/team-img3.jpg" alt="image">
                                    <i class='bx bxl-instagram'></i>
                                    <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-4 col-6">
                                <div class="box">
                                    <img src="~/assets/images/team/team-img4.jpg" alt="image">
                                    <i class='bx bxl-instagram'></i>
                                    <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-4 col-6">
                                <div class="box">
                                    <img src="~/assets/images/team/team-img5.jpg" alt="image">
                                    <i class='bx bxl-instagram'></i>
                                    <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-4 col-6">
                                <div class="box">
                                    <img src="~/assets/images/team/team-img6.jpg" alt="image">
                                    <i class='bx bxl-instagram'></i>
                                    <a href="https://www.instagram.com/" target="_blank" class="link-btn"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="sidebar-contact-info">
                        <h2>
                            <a href="tel:+11234567890">+1 (123) 456 7890</a>
                            <span>OR</span>
                            <a href="mailto:hello@rivate.com">hello@rivate.com</a>
                        </h2>
                    </div>

                    <ul class="social-list">
                        <li><span>Follow Us On:</span></li>
                        <li><a href="https://www.facebook.com/" target="_blank"><i class='bx bxl-facebook'></i></a></li>
                        <li><a href="https://www.twitter.com/" target="_blank"><i class='bx bxl-twitter'></i></a></li>
                        <li><a href="https://www.youtube.com/" target="_blank"><i class='bx bxl-youtube'></i></a></li>
                        <li><a href="https://www.twitch.com/" target="_blank"><i class='bx bxl-twitch'></i></a></li>
                    </ul>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>

export default {
    name: 'SidebarModal'
}
</script>