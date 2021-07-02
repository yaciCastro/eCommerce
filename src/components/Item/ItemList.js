import React, {useState,useEffect, useContext}from "react";

//COMPONENTES
import Item from "./Item";
import CartContext from '../Cart/CartContext'
//IMG
import imagenes from '../../img/imagenes.js';
import './ItemList.css'

const ItemsList = () => {
const value = useContext(CartContext)
const [productos, setProductos] = useState([])
useEffect(() => {
  const prom= new Promise((resolve)=>{
      setTimeout(()=>{
          resolve([
            { id: 1, name: "Pajaro", price: 20, description:"bordado pajaro azul", img:imagenes.pajaro},
            { id: 2, name: "Zorro", price: 150, description:"zorro", img:imagenes.zorrito },
            { id: 3, name: "Gato", price: 60, description:"bordado gato", img:imagenes.gato},
            { id: 4, name: "Conejo", price: 100, description:"bordado conejo", img:imagenes.conejo}
          ])
      }, 2000)
  })
  prom.then((resultado)=>{
      setProductos(resultado);
  })
}, [])

return ( 
    <div className="list">
        {productos.map(prod =>
          <div> 
            <ul key={prod.id}>
              <Item dataItem={prod} />
              <div>{value}</div>
            </ul>
          </div>
        )}
    </div>
  );
}

export default ItemsList;
