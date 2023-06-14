import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
  const {getItemQuantity} = useCartContext()
    return (
      <>
        <button className="btn btn-outline carrito">
          <Link to={"/cart"} className="nav-link">
          <i className="fas fa-shopping-cart"></i>
          {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
          </Link>
      </button>
      </>
    )}

export default CartWidget