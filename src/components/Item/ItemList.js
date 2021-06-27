import React from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";
import './ItemList.css'

const ItemsList = ({ data }) => {

  return (
     <div>
        <h1 class="title">Productos</h1>
        <div className="list centrado">
        {data.map((item) => {
            return (
            <ul key={item.id}>
                <Item dataItem={item} />
                <ItemCount stock={5} initial={1}/>
            </ul>
            );
        })}
        </div>
    </div>
  );
};

export default ItemsList;
