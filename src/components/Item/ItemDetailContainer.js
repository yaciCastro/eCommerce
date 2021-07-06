import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';

import ItemDetail from './ItemDetail.js';
import imagenes from '../../img/imagenes.js';

//COMPONENTES
const ItemDetaiContainer = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const productos = [
            { id: 1, name: "Pajaro", price: 20, description:"bordado pajaro azul", img:imagenes.pajaro},
            { id: 2, name: "Zorro", price: 150, description:"zorro", img:imagenes.zorrito },
            { id: 3, name: "Gato", price: 60, description:"bordado gato", img:imagenes.gato},
            { id: 4, name: "Conejo", price: 100, description:"bordado conejo", img:imagenes.conejo}
          ]

    const getItems = new Promise((resolve, reject) => {setTimeout(() => resolve(productos), 2000);});

    useEffect(() => {
        getItems
          .then(
            (data) => {
              if(id){
                const found = data.find(element => element.id == id);
                setItems(found);
                if(found){ setisLoading(false); }            
              }
            },
            (error) => {
              console.log(
                "la promesa fue directamente RECHAZADA"
              );
            }
            )
            .catch((error) => {
              console.log(error.message);
              return "Valor por defecto";
            });
        });
      
      return (
        <div className="itemList">
          {isLoading ? <p>Cargando...</p> : 
            <ItemDetail
              key={items.id}
              id={items.id}
              title={items.title}
              description={items.description}
              price={items.price}
              pictureUrl={items.pictureUrl}
              stock={items.stock}
            />
          }
        </div>
      );
    }



export default ItemDetaiContainer