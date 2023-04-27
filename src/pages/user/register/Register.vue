<script setup>
import TopNavbar from '../../../components/TopNavbar.vue';
import Footer from '../../../components/Footer.vue';
import { ref } from 'vue';

const billing=ref(false);
const newuser=ref({
  firstName:"",
  lastName:"",
  email:"",
  email_verified:false,
  auto_login:false,
  password:"",
  roles:[
    "user"
  ],
  address:{
    street:"",
    city:"",
    country:"",
    zip:""
  },
  shippingAddress:{
    street:"",
    city:"",
    country:"",
    zip:""
  }
})
</script>

<template>
  <div class="wrapper">
  <TopNavbar />

  <main class="form-signin">
    <form action="">
      <div> <!--1 column of 3-->
        <h1 class="h3 mb-3 fw-normal">Basic information</h1>
        <div class="form-floating mb-2">
          <input type="text" class="form-control" id="floatingFName" placeholder="Teszt" v-model="newuser.firstName">
          <label for="floatingFName">First Name</label>
        </div>
        <div class="form-floating mb-2">
          <input type="text" class="form-control" id="floatingLName" placeholder="Elek" v-model="newuser.lastName">
          <label for="floatingLName">Last Name</label>
        </div>
        <div class="form-floating mb-2">
          <input type="email" class="form-control" id="floatingMail" placeholder="name@example.com" v-model="newuser.email">
          <label for="floatingMail">Email address</label>
        </div>
        <div class="form-floating mb-2">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="newuser.password">
          <label for="floatingPassword">Password</label>
        </div>
      </div>
      <div><!--2 column of 3 -->
        <h1 class="h3 mb-3 fw-normal">Shipping Address</h1>
        <div class="form-floating mb-2">
          <input type="password" class="form-control" id="floatingCountry" placeholder="Password" v-model="newuser.shippingAddress.country">
          <label for="floatingCountry">Country</label>
        </div>
        <div class="form-floating mb-2">
          <input type="password" class="form-control" id="floatingCity" placeholder="Password" v-model="newuser.shippingAddress.city">
          <label for="floatingCity">City</label>
        </div>
        <div class="form-floating mb-2">
          <input type="password" class="form-control" id="floatingStreet" placeholder="Password" v-model="newuser.shippingAddress.street">
          <label for="floatingStreet">Street</label>
        </div>
        <div class="form-floating mb-2">
          <input type="password" class="form-control" id="floatingZIP" placeholder="Password" v-model="newuser.shippingAddress.zip">
          <label for="floatingZIP">ZIP code</label>
        </div>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
      <p class="mt-5 mb-3 text-muted"></p>
    </form>
  </main>

  <Footer/>
</div>
</template>
  
<style scoped>
  html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.label {
  text-decoration: white;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 100px auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

h1 {
  text-align: center;
  color: #e1bee7;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 100;
}


.form-signin .form-floating:focus-within {
  z-index: 2;
}
.form-signin .checkbox label {
  color: #E4E4E4;
}
.form-signin input {
  font-size: 1.3rem;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>