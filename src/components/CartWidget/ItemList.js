import React from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";
import './ItemList.css'

const ItemsList = ({ data }) => {
  /*const [items, setItems] = useState(itemsData);*/

  return (
     <div>
        <h1 class="title">Items List</h1>
        <div className="list">
        {data.map((item) => {
            return (
            <ul key={item.id}>
                <Item dataItem={item} />
                <ItemCount stock='5' initial='1'/>
            </ul>
            );
        })}
        </div>
    </div>
  );
};

export default ItemsList;
