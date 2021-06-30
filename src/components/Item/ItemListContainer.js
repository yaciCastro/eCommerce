import React, {useState} from 'react'
import ItemList from './ItemList'

//IMG
import imagenes from '../../img/imagenes.js';

const itemsData = [
    { id: 1, name: "Pajaro", price: 20, description:"bordado pajaro azul", img:imagenes.pajaro},
    { id: 2, name: "Zorro", price: 150, description:"zorro", img:imagenes.zorrito },
    { id: 3, name: "Gato", price: 60, description:"bordado gato", img:imagenes.gato},
    { id: 4, name: "Conejo", price: 100, description:"bordado conejo", img:imagenes.conejo}
  ];
  
function ItemListContainer() {
    const [items] = useState(itemsData);
    
    return (
        <div>
            <h1 className="title"> Productos </h1>
            <ItemList data={items}/>  
        </div>
    )
}
 
export default ItemListContainer;