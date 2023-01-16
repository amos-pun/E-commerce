const initialData = {
    cart_items: [

    ]
}

export const cartReducer = (state=initialData, action) => {
    switch(action.type){
        case "ADD_TO_CART":{
            return {cart_items:[...state.cart_items,action.payload]}
        }
        case "REMOVE_FROM_CART":{
            return {cart_items: [...state.cart_items.filter(item=>item.id  !== action.payload)]}
        }
        case "CLEAR_CART": {
            return {cart_items: []}
        }
        default:
            return state
    }
}