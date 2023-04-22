import { useState } from "react"
const ItemCount = ({ ValInicial, stock }) => {

  const [contador, setContador] = useState(ValInicial) //Defino un estado con valor inicial 1

  const sumar = () => contador < stock && setContador(contador + 1)
  const restar = () => contador > ValInicial && setContador(contador - 1)
  return (
    <div>
      <button className="btn btn-light" onClick={() => restar()}>-</button>
      {contador}
      <button className="btn btn-light" onClick={() => sumar()}>+</button>
      <button className="btn btn-primary">Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount