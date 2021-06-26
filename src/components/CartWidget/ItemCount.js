import React, { useState } from 'react'
import {Button} from 'semantic-ui-react'
import './ItemCount.css'

function ItemCount(props){

    const[count, setCount, onAdd] = useState(props.initial)
   
    return (
        <div>
            <p className="centro">{count}</p>
            <div className="contador centro">
                <Button className="btn btn1" onClick={() =>  setCount(count < props.stock ? count+props.initial: count === props.stock)}>+</Button>
                <Button className="btn btn1" onClick={() => onAdd()}>agregar al carrito</Button>
                <Button className="btn btn1" onClick={() => setCount(count > props.initial ? count-props.initial: count === props.initial)}>-</Button>
            </div>
        </div>
        )
    }


export default ItemCount;   
