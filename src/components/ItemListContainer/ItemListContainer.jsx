import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  useEffect(()=>{
    fetch('./json/productos.json')
    .then(response => response.json())
    .then(productos => {
      const productosFiltrados = productos.filter(prod => prod.stock > 0)
      const items =  <ItemList productos = {productosFiltrados}/>
      setProductos(items)
    })
  }, [])

  return (
    <div className='row'>
      {productos}
    </div>
  );
}

export default ItemListContainer;

