import { useContext, useRef } from "react"
import classes from "./ProductForm.module.css"
import { v4 as uuidv4 } from 'uuid'
import CartContext from "../../Store/cart-context"
const ProductForm=(props)=>{
    const name=useRef()
    const des=useRef()
    const price=useRef()
    const qty=useRef()
    const cartCtx = useContext(CartContext)
    const submitHandler=(e)=>{
        e.preventDefault()
        const item={
            id:uuidv4(),
            name: name.current.value,
            desc: des.current.value,
            price: price.current.value,
            qty: qty.current.value
        }
        cartCtx.addItem(item)
    }
    return(
        <form className={classes['form-container']} onSubmit={submitHandler}>
            <div>
                <label>Name</label>
                <input type='text' ref={name}></input>
            </div>
            <div>
                <label>Description</label>
                <input type='text' ref={des}></input>
            </div>
            <div>
                <label>Price</label>
                <input type='text' ref={price}></input>
            </div>
            <div>
                <label>Quantity</label>
                <input type='text' ref={qty}></input>
            </div>
            <button>Add Medicine</button>
        </form>
    )
}
export default ProductForm