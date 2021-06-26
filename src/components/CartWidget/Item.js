import React from 'react'
import './Item.css'

  const Item = ({ dataItem }) => {
    return (
      <div className='container'>
        <div className='card'>
          <img alt="" src={dataItem.img}/>
          <h4 className="centro">{dataItem.name} - U$D{dataItem.price}</h4>
          <p className="centro">{dataItem.description}</p>
        </div>
      </div>
    );
  };
  
  export default Item;
  