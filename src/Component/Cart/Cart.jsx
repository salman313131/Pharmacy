import Modal from "../UI/Modal"
const Cart=(props)=>{
    return(
        <Modal onClose={props.onClose}>
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
            <div>
                <h3>Total 31</h3>
                <div>
                    <button>Purchase</button>
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>
        </Modal>
    )
}
export default Cart