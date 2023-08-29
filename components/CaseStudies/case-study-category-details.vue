<template>
    <div class="blog-area ptb-100 bg-FAFAFA">
        <div class="container">
            <div class="row justify-content-center" v-if="details !== []">
                <div class="col-lg-4 col-md-6" v-for="casestudy in details[0].attributes?.case_studies?.data"
                    :key="casestudy.id">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <router-link :to="'/case-studies-details/' + casestudy.attributes.slug" class="d-block">
                                <img :src="casestudy?.attributes?.image?.data?.attributes?.url" alt="blog">
                            </router-link>
                            <!-- <div class="date">
                                <i class='bx bx-calendar'></i>
                                {{ casestudy.attributes.date }}
                            </div> -->
                        </div>
                        <div class="content">
                            <h3>
                                <NuxtLink :to="'/case-studies-details/' + casestudy.attributes.slug">
                                    {{ casestudy.attributes.title }}
                                </NuxtLink>
                            </h3>
                            <p>{{ casestudy.attributes.shortDesc }}</p>
                            <div class="d-flex align-items-center">
                                <img :src="casestudy.attributes.avtar.data.attributes.url" alt="blog">
                                <div class="info">
                                    <h5>{{ casestudy.attributes.author }}</h5>
                                    <span>{{ casestudy.attributes.date }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CategoryDetails',
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent,
            casestudiescategory: []
        }
    },
}
</script>