import React, {useEffect,useState,setTimeout} from 'react'
import ItemDetail from './ItemDetail'

import imagenes from '../../img/imagenes.js';

const ItemDetailConteiner = () => {
  
  const [producto, setProducto] = useState([])
    useEffect(() => {
    
      const prom= new Promise((resolve, reject)=>{
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
          setProducto(resultado);
      })
  }, [])
  
    return ( 
        <div className="list">
            {producto.map(product =>
              <div> 
                <ul key={product.id}>
                    <ItemDetail dataItem={items}/>
                    <ItemCount stock={5} initial={1}/>
                </ul>
              </div>
              )}
        </div>
    );
    }
export default ItemDetailConteiner

