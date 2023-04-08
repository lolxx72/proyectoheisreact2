import CartWidget from "../CartWidget/cartwidget"

const NavBar = () => {
    return(
        <nav class="navbar navbar-light" >
            <h3>Marie</h3>

            <div>
                <button variant="outline-warning">Mochilas</button>
                <button variant="outline-warning">Librería</button>
                <button variant="outline-warning">Agendas</button>
            </div>

<CartWidget />
        </nav>

    )
}

export default NavBar