import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css'
  
const Item = ({id,img,name,price,description}) => {
  
    return (
      <Link className='container' to={`/item/${id}`}>
        <div className='card' key={id}>
          <img alt="" src={img}/>
          <h4 className="centro">{name} - ${price}</h4>
          <p className="centro">{description}</p>
        </div>
      </Link>
    );
  };
  
  export default Item;
