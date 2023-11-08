import { useState,useReducer } from "react";
import CartContext from "./cart-context";
const defaultState={
    cartItems:[],
    totalAmount:0,
}
const cartReducer=(state,action)=>{
    return defaultState
}
const CartProvider=(props)=>{
    const [items,setItems] = useState([])
    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultState)
    const addItemHandler=(item)=>{
        setItems(prevState=>{
            return [item,...prevState]
        })
    }
    const addItemToCartHandler=(item)=>{}
    const removeItemFromCartHandler=(id)=>{}
    const cartContext ={
        items:items,
        cartItems:cartState.cartItems,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        addItemToCart:addItemToCartHandler,
        removeItemFromCart:removeItemFromCartHandler,
    }
    return(
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}
export default CartProvider