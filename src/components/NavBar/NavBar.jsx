import CartWidget from "../CartWidget/cartwidget"
import Categorias from "./Categorías/categorias"
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
  <Link className="nav-link" to={"/"}>
        <button className="navbar-brand btn">PetFunes</button>
      </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <Categorias/>
    
    <CartWidget cantCarrito={0} />
  </div>
</nav>

    )
}

export default NavBar