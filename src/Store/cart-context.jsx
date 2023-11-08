import React from "react";
const CartContext=React.createContext({
    items:[],
    cartItems:[],
    totalAmount:0,
    addItem:(item)=>{},
    addItemToCart:(item)=>{},
    removeItemFromCart:(id)=>{}
})
export default CartContext