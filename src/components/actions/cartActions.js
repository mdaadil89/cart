
import { ADD_TO_CART,LOAD_PRODUCTS_SUCCESS} from './action-types/cart-actions'
import axios from 'axios';

export function loadProductsSuccess(products) {
    return { type : LOAD_PRODUCTS_SUCCESS, products}
}

export function addProductSuccess(){
    return {type: ADD_TO_CART}
}


export function loadProducts(){
    return function(dispatch){
        return axios.get("http://localhost:4000/items")
        .then(res => res.data).then(products => {
            console.log(products)
            dispatch(loadProductsSuccess(products));
        }).catch(error => {
            throw(error);
        })
    }
}

export const addToCart= ()=>{
    return{
        type: ADD_TO_CART
    }
}
