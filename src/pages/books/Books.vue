<script setup>
import TopNavbar from '../../components/TopNavbar.vue';
import Footer from '../../components/Footer.vue';
import dataservice from '../../services/dataservice';
const books=dataservice.getProductArray(0);
console.log(books);
</script>

<template src="./books.html"></template>
<style scoped src="../../assets/css/books.css"></style>

<script>
export default {
  components: {
    TopNavbar,
    Footer
  },

  data() {
    return {
    };
  }
};
</script>