import React, { useState } from 'react'
import {Button} from 'semantic-ui-react'
import './ItemCount.css'

function ItemCount(props){


    const[count, setCount] = useState(0)

    return (
        <div>
            <p className="centro">{count}</p>
            <div className="contador centro">
                <Button className="btn btn1" onClick={() => setCount(count+1)}>+</Button>
                <Button className="btn btn1">agregar al carrito</Button>
                <Button className="btn btn1" onClick={() => setCount(count-1)}>-</Button>
            </div>
        </div>
        )
    }


export default ItemCount;   
