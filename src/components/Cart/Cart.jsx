import {useCartContext} from "../../context/CartContext"
import { Link } from "react-router-dom"
import ItemList from "../ItemList/ItemList"

const Cart = () => {
    const { Cart, totalPrice, emptyCart } = useCartContext()
    return (
        <>
            {
                Cart.length === 0 ?
                    <>
                        <h1>Carrito Vacio</h1>
                        <button className="btn btn-dark"><Link to={"/"} className="nav-link">Continuar comprando</Link></button>
                    </>
                    :
                    <div className="container cartContainer">
                        {<ItemList productos={Cart} plantilla={"ItemCart"} />}
                        <div className="cartButtons">
                            <p>Resumen de compra: {totalPrice()}</p>
                            <button className="btn btn-dark" onClick={() => emptyCart()}>Vaciar Carrito</button>
                            <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continuar comprando</button></Link>
                            <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar Compra</button></Link>
                        </div>
                    </div>

            }


        </>
    )
}

export default Cart