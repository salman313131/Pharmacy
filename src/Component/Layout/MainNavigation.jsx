import classes from "./MainNavigation.module.css"
const MainNavigation=(props)=>{
    return(
        <div className={classes.main}>
            <h1>Pharmacy</h1>
            <button onClick={props.onShow}>
                <span>Cart</span>
                <span>3</span>
            </button>
        </div>
    )
}
export default MainNavigation