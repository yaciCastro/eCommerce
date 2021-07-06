import React, { useState } from 'react'
import {Button} from 'semantic-ui-react'
import './ItemCount.css'
import Boton from '../Boton/Boton'

function ItemCount({initial, stock}){

    const[count, setCount] = useState(1)
    const[mostrar, setMostrar] = useState(false)

    const add = () =>{
        count >= stock ? alert('puede elegir lo que figura en stock') : setCount(count + 1)
    }
    const off = () =>{
        count > initial ? setCount(count - 1) : alert('debe seleccionar 1 articulo')
    }

    return ( 
            <div>
                <p className="centro">{count}</p>
                <div className="contador centro">
                    <Button className="btn btn1" onClick={() => add(count >= stock ? alert('puede elegir lo que figura en stock') : setCount(count + 1)
    )}>+</Button>
                    <Button className="btn btn1" onClick={() => setMostrar(!mostrar)}>
                    comprar</Button>
                    <div className={mostrar ? "show-element" : null}></div>
                        {mostrar && <Boton/>} 
                    <Button className="btn btn1" onClick={() => off(count > initial ? setCount(count - 1) : alert('debe seleccionar 1 articulo')
    ) }>-</Button>
                </div>
            </div>
        )
    }

export default ItemCount;   
