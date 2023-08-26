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
                        <div class="post-content">
                            <h3>
                                <router-link :to="'/glossary-details/' + glossary.attributes.slug">
                                    {{ glossary.attributes.title }}
                                </router-link>
                            </h3>
                            <p>{{ glossary.attributes.shortDesc }}</p>
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