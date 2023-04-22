import React from 'react';

const Item = ({item}) => {
  console.log(item)
  return (
    <div className="card" style={{ width: "18rem" }}>
  <img src={item.img} className="card-img-top" alt="Imagen de producto" />
  <div className="card-body">
    <h5 className="card-title">{item.nombre}</h5>
    <p className="card-text">Marca: {item.marca}</p>
    <p className="card-text">Precio: ${item.precio}</p>
    <p className="card-text">Disponibles: {item.stock}</p>
  </div>
</div>

  );
}

export default Item;
