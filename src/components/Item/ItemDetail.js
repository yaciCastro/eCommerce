import React from 'react'
import ItemCount from './ItemCount';  



const ItemDetail = ({ item }) => {
  /*
  const [goToCart, setGoToCart] = useState(false);

  const { addItem } = useCartContext();

  const onAdd = (evt, quantity) => {
      evt.stopPropagation();

      addItem(item, quantity);

      setGoToCart(true);
      addCart({item, cantidad: quantity,}, quantity)
  };
*/
  return(
  <div>
    <div className='card' key={item.id}>
      <img alt="" src={item.img}/>
      <h4 className="centro">{item.name} - ${item.price}</h4>
      <p className="centro">{item.description}</p>
      <div><ItemCount initial={1} stock={5}/></div>
    </div>
  </div>
  )
}
    
export default ItemDetail

