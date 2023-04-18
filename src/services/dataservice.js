import Axios from 'axios';
Axios.defaults.baseURL = 'https://shopking.cyclic.app';

export default {
    getProductById(productId){
        return Axios.get(`/products/${productId}`);
    },
    getProductArray(startingNum){
        return Axios.get(`/products/arr/${startingNum}`);
    },
    createOrder(newOrder){
        return Axios.post('/orders',{
            userId: newOrder.userId,
            paymentStatus: newOrder.paymentStatus,
            status: newOrder.status,
            billingAddress: newOrder.billingAddress
        });
    },
    createOrderDetail(newOrderDetail){
        return Axios.post('/orderdetails',{
            productId: newOrderDetail.productId,
            orderId: newOrderDetail.orderId,
            archived_price: newOrderDetail.archived_price,
            quantity:newOrderDetail.quantity
        });
    },
    modifyUser(user){
        return Axios.patch('/users',{user});
    },
    registration(user){
        return Axios.post('/auth/register',{user});
    },
    login(user){
        return Axios.post('/auth/login',{user});
    },
    logout(){
        return Axios.post('/auth/logout');
    }
}