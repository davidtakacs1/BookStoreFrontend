<script setup>
import TopNavbar from '../../../components/TopNavbar.vue';
import Footer from '../../../components/Footer.vue';
import dataservice from '../../../services/dataservice';

const user={
  email:"",
  password:""
}

const login=()=>{
  dataservice.login(user).then((result)=>{
    console.log(result)
  });
}
</script>

<template src="./sign-in.html"></template>
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