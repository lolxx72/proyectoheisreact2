import { Link } from "react-router-dom"
import { memo } from "react"
const Categorias = memo(() =>{
return(
<div className="collapse navbar-collapse" id="navbarColor01">
  <ul className="navbar-nav me-auto">
    <li className="nav-item">
      <Link className="nav-link" to={"/category/paraPerros"}>
        <button className="btn ">Perros</button>
      </Link>

    </li>
    <li className="nav-item">
    <Link className="nav-link" to={"/category/paraGatos"}>
    <button className="btn ">Gatos</button>
      </Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to={"/category/sobreNos"}>
    <button className="btn ">Nosotros</button>
      </Link>
    </li>
  </ul>
</div>

    )
}
)

export default Categorias