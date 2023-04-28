<script setup>
import dataservice from '../../services/dataservice';
import {useCart} from '../../stores/cart';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const shoppingCart=useCart();
console.log(shoppingCart.cart)

const FeaturedBooks=ref([]);
dataservice.getRandomBooks(4).then((resp)=>{
  FeaturedBooks.value=resp.data;
  FeaturedBooks.value.forEach(book => {
    if(!book.hasOwnProperty('imgUrl')){
      book.imgUrl="/img/no image for book.png";
    }
  });
});

</script>

<template>
<div class="container new-arrivals-panel">
  <h1>New Arrivals</h1>

  <div class="row mb-2 new-arrival">
    <div class="col-md-6" v-for="bookDetail in FeaturedBooks">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary book-category">{{ bookDetail.category }}</strong>
          <h3 class="mb-0 book-title">{{ bookDetail.name }}</h3>
          <div class="mb-1 text-muted book-author">{{ bookDetail.author }}</div>
          <p class="card-text mb-auto book-description">{{ bookDetail.description }}</p>

          <div class="input-group">
            <span class="price"><input type="text"
                   :style="{ '--currency': bookDetail.currency }"
                   :value="bookDetail.price"
                   class="form-control"  readonly aria-label=""></span>
            <button @click="shoppingCart.addToCart(bookDetail)" class="btn btn-outline-secondary add-to-cart" type="button"><img src="/images-cloud/basket_icon.svg" alt="Add to basket"></button>
          </div>

        </div>
        <div class="col-auto d-md-block book-thumbnail">
          <img :src="bookDetail.imgUrl" :alt="bookDetail.title + ' by ' + bookDetail.author" />
        </div>
      </div>
    </div>


  </div>
</div>
</template>
<style scoped src="../../assets/css/new-arrivals.css"></style>