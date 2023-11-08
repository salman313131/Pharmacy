import { useState } from "react"
import MainNavigation from "./Component/Layout/MainNavigation"
import ProductForm from "./Component/ProductForm/ProductForm"
import Cart from "./Component/Cart/Cart"
import ProductList from "./Component/ProductForm/ProductList"
function App() {
  const [isCart,setIsCart] = useState(false)
  const closeHandler=()=>{
    setIsCart(false)
  }
  const showHandler=()=>{
    setIsCart(true)
  }
  return (
    <>
      {isCart && <Cart onClose={closeHandler}/>}
      <MainNavigation onShow={showHandler}/>
      <ProductForm />
      {/* <ProductList /> */}
    </>
  )
}

export default App
