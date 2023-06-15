import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import {getProds} from "../../firebase/firebase.js"


const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([])
  const {category} = useParams()

  useEffect(()=>{

    if(category){
      getProds()
    .then(productos => {
      const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category)
      const items =  <ItemList productos = {productosFiltrados}/>
      setProductos(items)
    })
  } else {
    getProds()
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
      {<ItemList productos={productos} plantilla={"Item"}/>}
    </div>
  );
}

export default ItemListContainer;

