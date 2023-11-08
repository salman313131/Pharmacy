import { useContext } from "react"
import CartContext from "../../Store/cart-context"
import ProductListItem from "./ProductListItem"
const ProductList=(props)=>{
    const cartCtx = useContext(CartContext)
    const itemList= <ul>
        {cartCtx.items.map(item=><ProductListItem name={item.name} desc={item.desc} price={item.price} qty={item.qty}/>)}
    </ul>
    return(
        {itemList}
    )
}
export default ProductList