import { ADD_TO_CART,LOAD_PRODUCTS_SUCCESS} from '../actions/action-types/cart-actions'


const initState = {
    items: [],
    total: 0

}
const cartReducer= (state = initState,action)=>{
    
    if(action.type === LOAD_PRODUCTS_SUCCESS)
    return {...state,
    items:action.products};
    
    if(action.type === ADD_TO_CART){
        
             return{
                ...state,
                 total: state.total + 1
                  }
                }
        

    else
     return {...state}
        
        
    
    
 
    
}

export default cartReducer
