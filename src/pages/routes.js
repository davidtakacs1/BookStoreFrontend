import {createRouter} from 'vue-router'
import Homepage from './home/Home.vue';
import {RegisterComponent, SignInComponent} from './user';
import Cart from './cart/Cart.vue';
import Books from './books/Books.vue';

const routes = [
  {
    path: '/',
    component: Homepage
  },

  {
    path: '/sign-in/',
    component: SignInComponent
  },

  {
    path: '/register/',
    component: RegisterComponent
  },

  {
    path: '/cart/',
    component: Cart
  },

  {
    path: '/books/',
    component: Books
  }
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}