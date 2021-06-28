import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css'

  const Item = ({ dataItem }) => {
    return (
      <Link className='container' to="/itemDetail:id">
        <div className='card' key={dataItem.id}>
          <img alt="" src={dataItem.img}/>
          <h4 className="centro">{dataItem.name} - ${dataItem.price}</h4>
          <p className="centro">{dataItem.description}</p>
        </div>
      </Link>
    );
  };
  
  export default Item;
  