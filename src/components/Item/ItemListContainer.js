import React, {useState,useEffect, useContext}from "react";
import { useParams } from 'react-router-dom';

//COMPONENTES
import Item from "./Item";
import ItemList from './ItemList'

//IMG
import imagenes from '../../img/imagenes.js';
import './ItemList.css'

const ItemListContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const productos = [
            { id: 1, name: "Pajaro", price: 20, description:"bordado pajaro azul", img:imagenes.pajaro},
            { id: 2, name: "Zorro", price: 150, description:"zorro", img:imagenes.zorrito },
            { id: 3, name: "Gato", price: 60, description:"bordado gato", img:imagenes.gato},
            { id: 4, name: "Conejo", price: 100, description:"bordado conejo", img:imagenes.conejo}
          ]

    const getItem = new Promise((resolve, reject) => {setTimeout(() => resolve(productos), 2000);});

    useEffect(() => {
        getItem
          .then(
            (data) => {
              if(id){
                let prodCat = []
                data.forEach(element => {
                  if(element.category == id){
                    prodCat.push(element);
                  }
                });
                setItem(prodCat);
              }else{
                setItem(data);
              }
            },
            (error) => {
              //si la promesa fue rechazada 
              console.log(
                "la promesa fue directamente RECHAZADA"
              );
            }
          )
          .catch((error) => {
            console.log(error.message);
            return "Valor por defecto";
        });
      }, [id]);
    }
    return (
        <div className="list">
        {productos.map(prod =>
          <div> 
            <ul key={prod.id}>
              <ItemList item={item} />
            </ul>
          </div>
        )}
        </div>

      );
}
export default ItemListContainer;