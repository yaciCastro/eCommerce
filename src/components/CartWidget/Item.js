import React from 'react'
import './Item.css'

  const Item = ({ dataItem }) => {
    return (
      <div className='container'>
        <div className='card'>
          <img alt="img" img={dataItem.img}/>
          <h4>{dataItem.name} - U$D{dataItem.price}</h4>
          <p>description={dataItem.description}</p>
        </div>
      </div>
    );
  };
  
  export default Item;
  