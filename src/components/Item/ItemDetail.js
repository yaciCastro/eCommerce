import React from 'react'
import {useEffect, useState} from "react";
import ItemCount from './ItemCount';
import imagenes from '../../img/imagenes.js';


        const ItemDetail = ({item}) => {
            const [img, setImg] = useState();
            const [detalles, setDetalles] = useState();
            const [precio, setPrecio] = useState();
        
        function timeout(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));

        }
        
        async function funcAsync(item) {
            await timeout(2000);
            return item
        }
            useEffect(() => {
                
                const item = {
                    //prueba
                    "img": imagenes.zorrito,
                    "detalles": "producto",
                    "precio":"2000"

                };
        
                funcAsync(item).then(resultItem => {
                    setImg(resultItem.img);
                    setDetalles(resultItem.detalles);
                    setPrecio(resultItem.precio)
                });
        
            }, []);
        
            return (
                <div>
                    <img alt="" src={img}/>
                    <h1>{detalles}</h1>
                    <h1>{precio}</h1>
                    <ItemCount initial={1} stock={5}/>
                </div>
            );
        }

export default ItemDetail

