<template>
  <div>
    <Navbar />
    <PageTitle pageTitle="Case Study Categories" pageDesc="" />
    <div v-if="category !== null">
      <casestudycategorydetails v-bind:detailsContent="category" />
    </div>
    <Footertwo  />
  </div>
</template>
  
<script>
import Navbar from '../../../layouts/Navbar';
import PageTitle from '../../../components/Common/PageTitle';
import casestudycategorydetails from '../../../components/CaseStudies/case-study-category-details'
import Footertwo from '../../../layouts/Footer'
import axios from 'axios';

export default {
  components: {
    Navbar,
    PageTitle,
    casestudycategorydetails,
    Footertwo,
  },
  data() {
    return {
      category: null,
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/case-study-categories?filters[slug][$eq]=${slug}&populate=deep,5`, { params: { slug } })
        this.category = reaponse.data.data.sort((b, a) => a.id - b.id);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>