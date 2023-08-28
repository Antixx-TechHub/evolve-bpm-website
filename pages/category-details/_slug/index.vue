<template>
  <div>
    <Navbar />
    <PageTitle pageTitle="Blog Categories" pageDesc="" />
    <div v-if="category !== null">
      <CategoryDetails v-bind:detailsContent="category" />
      <Footertwo />
    </div>
    
  </div>
</template>
  
<script>
import Navbar from '../../../layouts/Navbar';
import PageTitle from '../../../components/Common/PageTitle';
import CategoryDetails from '../../../components/BlogTwo/categories-details'
import Footertwo from '../../../layouts/Footer'
import axios from 'axios';

export default {
  components: {
    Navbar,
    PageTitle,
    CategoryDetails,
    Footertwo
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
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/blog-categories?filters[slug][$eq]=${slug}&populate=deep,5`, { params: { slug } })
        this.category = reaponse.data.data.sort((b, a) => a.id - b.id);
        this.rows = this.category?.length;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>