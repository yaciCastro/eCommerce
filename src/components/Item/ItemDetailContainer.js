import React, {useEffect,useState} from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailConteiner = (prod) => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
      const prom= new Promise((resolve, reject)=>{
          setTimeout(()=>{
              resolve([
                { id: prod.id, name: prod.name, price: prod.price, description:prod.description, img:imagenes.pajaro},
              ])
  
          }, 2000)
      })
      prom.then((resultado)=>{
          setProductos(resultado);
      })
  }, [])
  
    return ( 
        <div className="list">
            {productos.map(produc =>
              <div> 
                <ul key={produc.id}>
                    <ItemDetail/>
                    <ItemCount stock={5} initial={1}/>
                    <h1>pepe</h1>
                </ul>
              </div>
              
              )}
  
        </div>
    );
    }
export default ItemDetailConteiner