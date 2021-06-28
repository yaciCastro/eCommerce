import React from 'react'

function ItemDetail(dataItem) {
    return (
        <div>
            <div className='card'>
                <img alt="" src={dataItem.img}/>
                <h4 className="centro">{dataItem.name} - ${dataItem.price}</h4>
                <p className="centro">{dataItem.description}</p>

            </div>
        </div>
    )
}

export default ItemDetail

