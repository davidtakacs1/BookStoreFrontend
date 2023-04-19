<script setup>
import TopNavbar from '../../../components/TopNavbar.vue';
import Footer from '../../../components/Footer.vue';
import { ref } from 'vue';

const billing=ref(false);
</script>

<template src="./register.html"></template>
<style scoped src="../../../assets/css/register.css"></style>

<script>
export default {
  components: {
    TopNavbar,
    Footer
  },

  data() {
    return {

    };
  },
};
</script>