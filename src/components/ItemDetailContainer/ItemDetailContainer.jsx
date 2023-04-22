import React from 'react';
//Unico prod de mi BDD
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const {id} = useParams()
    useEffect(() => {
        fetch('../json/productos.json')
        .then(response => response.json())
        .then(productos => {
            const prod  = productos.find(prod =>  prod.id === parseInt(id))
            setItem(prod)
        })
    }, [])

    return (
        <div className='card mb-3 container itemDetail'>
            <ItemDetail item={item}/>
        </div>
    );
}

export default ItemDetailContainer;
