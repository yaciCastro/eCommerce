import React, { useState } from 'react'
import {Button} from 'semantic-ui-react'
import './ItemCount.css'
import Boton from '../Boton/Boton'

function ItemCount({initial, stock}){

    const[count, setCount] = useState(initial)
    const[mostrar, setMostrar] = useState(false)

    return ( 
            <div>
                <p className="centro">{count}</p>
                <div className="contador centro">
                    <Button className="btn btn1" onClick={() =>  setCount(count < stock ? count+initial : count === stock)}>+</Button>
                    <Button className="btn btn1" onClick={()=> setMostrar(!mostrar)}>
                    comprar</Button>
                    <div className={mostrar ? "show-element" : null}></div>
                        {mostrar && <Boton/>} 
                    <Button className="btn btn1" onClick={() => setCount(count > initial ? count-initial : count === initial)}>-</Button>
                </div>
            </div>
        )
    }

export default ItemCount;   
