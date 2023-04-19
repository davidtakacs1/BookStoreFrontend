import { defineStore } from 'pinia'

export const useProduct = defineStore('cart-store', {
  state: () => {
    return {
      products: []
    }
  },
})