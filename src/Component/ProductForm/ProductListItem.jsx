const ProductListItem=(props)=>{
    return(
        <li>
            <span>{props.name}</span>
            <span>{props.desc}</span>
            <span>{props.price}</span>
            <span>{props.qty}</span>
        </li>
    )
}
export default ProductListItem