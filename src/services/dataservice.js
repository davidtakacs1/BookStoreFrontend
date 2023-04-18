import Axios from 'axios';
Axios.defaults.baseURL = 'https://shopking.cyclic.app';

export default {
    getProductById(productId){
        return Axios.get(`/products/${productId}`);
    },
    getProductArray(startingNum){
        return Axios.get(`/products/arr/${startiNgnum}`)
    }
}