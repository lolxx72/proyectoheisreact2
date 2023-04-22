import React from 'react';
import Item from '../Item/Item';

const ItemList = ({productos}) => {
    console.log(productos)
    return (
        <>
            {productos.map(producto => <Item key={producto.id} item={producto}/>)}
        </>
    );
}

export default ItemList;

