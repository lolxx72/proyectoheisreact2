import { Link } from "react-router-dom"
const Categorias = () =>{
return(
<div className="collapse navbar-collapse" id="navbarColor01">
  <ul className="navbar-nav me-auto">
    <li className="nav-item">
      <Link className="nav-link" to={"/category/1"}>
        <button className="btn btn-primary">Perros</button>
      </Link>

    </li>
    <li className="nav-item">
    <Link className="nav-link" to={"/category/2"}>
    <button className="btn btn-primary">Gatos</button>
      </Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to={"/category/3"}>
    <button className="btn btn-primary">Nosotros</button>
      </Link>
    </li>
  </ul>
</div>

    )
}

export default Categorias