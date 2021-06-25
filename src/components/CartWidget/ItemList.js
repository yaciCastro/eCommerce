import React from "react";
import Item from "./Item";
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
            </ul>
            );
        })}
        </div>
    </div>
  );
};

export default ItemsList;
