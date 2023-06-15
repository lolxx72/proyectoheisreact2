import CartWidget from "../CartWidget/cartwidget"
import Categorias from "./Categorías/categorias"
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
  <Link className="nav-link" to={"/"}>
        <button className="navbar-brand btn"><img alt="logo" src="https://firebasestorage.googleapis.com/v0/b/pet-funes-react.appspot.com/o/311492909_651352936717008_1233013138297617638_n.jpg?alt=media&token=396aa1f9-604d-40c3-a3be-6bf219aae7c9"/></button>
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