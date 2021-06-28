import React from 'react'
import imagenes from '../../img/imagenes.js';

const itemsData = [
    { id: 1, name: "Pajaro", price: 20, description:"bordado pajaro azul", img:imagenes.pajaro},
    { id: 2, name: "Zorro", price: 150, description:"zorro", img:imagenes.zorrito },
    { id: 3, name: "Gato", price: 60, description:"bordado gato", img:imagenes.gato},
    { id: 4, name: "Conejo", price: 100, description:"bordado conejo", img:imagenes.conejo}
  ];

const ItemDetail = () => {
    
    return (
        <div>
            <div className='card'>
                <img alt="" src={itemsData.img}/>
                <h4 className="centro">{itemsData.name} - ${itemsData.price}</h4>
                <p className="centro">{itemsData.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail

