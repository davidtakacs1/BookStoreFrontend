<script setup>
import TopNavbar from '../../components/TopNavbar.vue';
import Footer from '../../components/Footer.vue';
import dataservice from '../../services/dataservice'
import { ref } from 'vue'

const products = ref([])

dataservice.getProducts()
  .then((resp) => {
      products.value = resp.data;
      products.value.forEach(book => {
        if(!book.hasOwnProperty('imgUrl')){
          book.imgUrl="/img/no image for book.png";
        }
  });
    })
    .catch((err) => {
        console.log(err);
    });
</script>

<template>
  <div class="wrapper">
    <TopNavbar />
    <div id="top-section" class="top-text">
      <div class="container">
      
        <div class="d-flex flex-wrap align-items-center">
          <div class="col-md-2 col-lg-3 col-1"></div>
          <div class="col-md-8 col-lg-6 col-sm-10 col-10 mb-4">
            
            <form class="col-16">
              <input autofocus type="search" class="form-control form-control-dark" placeholder="Search books..." aria-label="Search">
              <button type="submit" class="submit"><img src="/images-cloud/search.svg" alt="Search"></button>
            </form>
          </div>
          <div class="col-md-2 col-lg-3 col-4"></div>
        </div>
        <div>
          <div class="row row-cols-1 row-cols-md-3 g-3">
            <div class="col" v-for="product in products" :key="index">
              <div class="card h-100 product" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img :src="product.imgUrl" class="img-fluid rounded-start" :alt="product.name">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title text-white" text-white>{{ product.name }}</h5>
                      <p class="card-text text-white">{{product.author}}</p>
		                  <p class="card-text text-white">Price: {{product.price}}</p>
		                  <p class="card-text text-white">On stock: {{product.quantity}}</p>
		                  <button class="btn-primary text-white" v-if="product.quantity>0">Order</button>
                      <p v-else>Out of Stock</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
  
  <div class="parallax__layer parallax__layer--3">
    <div id="stars" class="top-stars">&nbsp;</div>
  </div>
  
  <div class="parallax__layer parallax__layer--2"></div>
  
  <div class="parallax__layer parallax__layer--2"><div id="clouds" class="clouds">&nbsp;</div></div>
  
  <div class="parallax__layer parallax__layer--2" style="z-index: 1000"></div>
  
  <div class="parallax__layer parallax__layer--1"></div>

  
  <Footer />

  </div>
</template>

<style scoped>
  .product{
    background-color: #60676e;
  }
  .carousel-item img {
  max-width: 1200px;
  margin: 10px 50px;
  }

</style>