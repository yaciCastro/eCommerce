import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = () => {
    
    return (  

            <div>
                <p>Lista</p>
                <ItemCount stock="5" initial="1"/>
                <ItemList/>
            </div>
    )
}
 
export default ItemListContainer;