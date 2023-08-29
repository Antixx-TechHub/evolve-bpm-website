<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row justify-content-center" v-if="details !== []">
                <div class="col-lg-4 col-md-6" v-for="glossary in details[0].attributes?.glossaries?.data"
                    :key="glossary.id">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <router-link :to="'/glossary-details/' + glossary.attributes.slug" class="d-block">
                                <img :src="glossary?.attributes?.image?.data?.attributes?.url" alt="blog">
                            </router-link>
                        </div>
                        <div class="content">
                            <h3>
                                <NuxtLink :to="'/glossary-details/' + glossary.attributes.slug">
                                    {{ glossary.attributes.title }}
                                </NuxtLink>
                            </h3>
                            <p>{{ glossary.attributes.shortDesc }}</p>
                            <div class="d-flex align-items-center">
                                <img :src="glossary.attributes.avtar.data.attributes.url" alt="blog">
                                <div class="info">
                                    <h5>{{ glossary.attributes.author }}</h5>
                                    <span>{{ glossary.attributes.date }}</span>
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
            glossarycategory: []
        }
    },
}
</script>