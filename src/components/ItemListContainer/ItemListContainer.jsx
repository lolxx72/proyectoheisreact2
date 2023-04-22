import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([])
  const {category} = useParams()

  useEffect(()=>{

    if(category){
      fetch('../json/productos.json')
    .then(response => response.json())
    .then(productos => {
      const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
      const items =  <ItemList productos = {productosFiltrados}/>
      setProductos(items)
    })
  } else {
      fetch('./json/productos.json')
    .then(response => response.json())
    .then(productos => {
      const productosFiltrados = productos.filter(prod => prod.stock > 0)
      const items =  <ItemList productos = {productosFiltrados}/>
      setProductos(items)
    })
  }

}, [category])

  return (
    <div className='row'>
      <h1 className='greeting'>{greeting}</h1>
      {productos}
    </div>
  );
}

export default ItemListContainer;

