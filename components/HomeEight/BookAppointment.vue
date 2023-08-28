<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>
        
        <div class="it-book-appointment-area pb-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-12">
                        <div class="it-book-appointment-image">
                            <div 
                                class="video-btn"
                                v-for="(image, imageIndex) in items"
                                :key="imageIndex"
                                @click="index = imageIndex"
                                style="cursor: pointer"
                            >
                                <i class="flaticon-play-button"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-12">
                        <form class="it-book-appointmen-form">
                            <div class="content">
                                <h3>Book appointment</h3>
                                <span>It's out pleasure to have a chance to cooperate.</span>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your name">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your email">
                            </div>
                            <div class="form-group">
                                <div class="select-box">
                                    <select>
                                        <option>Software licensing</option>
                                        <option>Corporate finance</option>
                                        <option>Manage investment</option>
                                        <option>Business planning</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <button type="submit" class="default-btn">Submit now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'

export default {
    name: 'BookAppointment',
    components: { CoolLightBox },
    data: function () {
        return {
            items: [
                {
                    src: 'https://www.youtube.com/watch?v=Y5KCDWi7h9o',
                }
            ],
            index: null
        };
    },
}
</script>