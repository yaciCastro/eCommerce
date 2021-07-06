import React from 'react'
import { useParams } from 'react-router';
import ItemDetailContainer from '../../components/Item/ItemDetailContainer';

function ItemDetailView() {
    const { id } = useParams();
    return (
        <ItemDetailContainer id={id}/>
                   
    )
}
export default ItemDetailView