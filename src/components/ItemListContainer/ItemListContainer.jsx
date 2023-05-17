import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { useDarkModeContext } from '../../context/DarkModeContext';
const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([])
  const {category} = useParams()
  const {darkMode} = useDarkModeContext()
  console.log(darkMode)

  useEffect(()=>{

    if(category){
      fetch('../json/productos.json')
    .then(response => response.json())
    .then(productos => {
      const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category)
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

