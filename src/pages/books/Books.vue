<script setup>
import TopNavbar from '../../components/TopNavbar.vue';
import Footer from '../../components/Footer.vue';
</script>

<template src="./books.html"></template>
<style scoped src="./books.css"></style>

<script>
import { mapState, mapActions } from 'pinia'

export default {
  components: {
    TopNavbar,
    Footer
  },

  mounted() {
    //console.log('mounted', this.contents)
  },

  computed: {
    ...mapState(useCart, {
      contents: 'getContents',
      count: 'count',
      cartTotal: 'total'
    }),

    total() {
      return Math.max(this.cartTotal - this.promo.value, 0).toFixed(2);
    }
  },

  data() {
    return {
      currency: {
        name: 'USD',
        symbol: '$'
      },

      promo: {
        code: 'EXAMPLECODE',
        value: 5
      }
    };
  },
};
</script>