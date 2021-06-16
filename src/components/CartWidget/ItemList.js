import React, {useEffect, useState} from 'react'
import Item from './Item'

const ItemList = () => {

    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        const prom = new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve([
                    <Item id="1" title="bordado arbol" description="bordado 3 colores, 
                    tamaño 25x25cm" price="300" pictureUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.domestika.org%2Fes%2Fblog%2F2497-descarga-gratis-un-manual-de-puntadas-basicas-de-bordado&psig=AOvVaw06TxlTi2V9Mud6IWVYqhZq&ust=1623895888862000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJic_uCJm_ECFQAAAAAdAAAAABAJ"/>,
                    <Item id="2" title="bordado arbol" description="bordado 3 colores, 
                    tamaño 100x100cm" price="500" pictureUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.domestika.org%2Fes%2Fblog%2F2497-descarga-gratis-un-manual-de-puntadas-basicas-de-bordado&psig=AOvVaw06TxlTi2V9Mud6IWVYqhZq&ust=1623895888862000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJic_uCJm_ECFQAAAAAdAAAAABAJ"/>,
                    <Item id="3" title="bordado arbol" description="bordado 3 colores, 
                    tamaño 15x15cm" price="200" pictureUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.domestika.org%2Fes%2Fblog%2F2497-descarga-gratis-un-manual-de-puntadas-basicas-de-bordado&psig=AOvVaw06TxlTi2V9Mud6IWVYqhZq&ust=1623895888862000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJic_uCJm_ECFQAAAAAdAAAAABAJ"/>,
                    <Item id="4" title="bordado arbol" description="bordado 3 colores, 
                    tamaño 60x60cm" price="550" pictureUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.domestika.org%2Fes%2Fblog%2F2497-descarga-gratis-un-manual-de-puntadas-basicas-de-bordado&psig=AOvVaw06TxlTi2V9Mud6IWVYqhZq&ust=1623895888862000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJic_uCJm_ECFQAAAAAdAAAAABAJ"/>,
                    <Item id="4" title="bordado arbol" description="bordado 3 colores, 
                    tamaño 60x60cm" price="550" pictureUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.domestika.org%2Fes%2Fblog%2F2497-descarga-gratis-un-manual-de-puntadas-basicas-de-bordado&psig=AOvVaw06TxlTi2V9Mud6IWVYqhZq&ust=1623895888862000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJic_uCJm_ECFQAAAAAdAAAAABAJ"/>
                    
                ])
            }, 2000)
        })
        prom.then((resultado)=>{
           setProductos(resultado)
        })    
    }, [])


    return(
        <div>
            {productos.map(prod=> <Item/>)}
        </div>
    )
}

export default ItemList;