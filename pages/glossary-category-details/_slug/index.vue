<template>
  <div>
    <Navbar />
    <PageTitle pageTitle="Glossary Categories" pageDesc="" />
    <div v-if="successcategory !== null">
      <GlossaryCategoriesDetails v-bind:detailsContent="successcategory" />
    </div>
    <Footertwo />
  </div>
</template>
    
<script>
import Navbar from '../../../layouts/Navbar';
import PageTitle from '../../../components/Common/PageTitle';
import GlossaryCategoriesDetails from '../../../components/Glossary/glossary-categories-details'
import Footertwo from '../../../layouts/Footer'
import axios from 'axios';

export default {
  components: {
    Navbar,
    PageTitle,
    GlossaryCategoriesDetails,
    Footertwo,
  },
  data() {
    return {
      successcategory: null,
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/glossary-categories?filters[slug][$eq]=${slug}&populate=deep,5`, { params: { slug } })
        this.successcategory = reaponse.data.data.sort((b, a) => a.id - b.id);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>