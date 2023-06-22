import { Categorias } from "./Categorías/Categorias";
import { CartWidget } from "../CartWidget/cartwidget";
import { Link } from "react-router-dom"

export const Navbar = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
<div className="container-fluid">
<Link className="nav-link" to={"/"}>
      <button><img alt="logo" className="logo-nav" src="https://firebasestorage.googleapis.com/v0/b/pet-funes-react.appspot.com/o/311492909_651352936717008_1233013138297617638_n.jpg?alt=media&token=396aa1f9-604d-40c3-a3be-6bf219aae7c9"/></button>
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
