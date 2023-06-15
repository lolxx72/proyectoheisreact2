import React from 'react';
//Unico prod de mi BDD
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProduct } from '../../firebase/firebase';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const {id} = useParams()
    useEffect(() => {
        getProduct(id).then(prod =>setItem(prod))
    }, [])

    return (
        <div className='card mb-3 container itemDetail'>
            <ItemDetail item={item}/>
        </div>
    );
}

export default ItemDetailContainer;
