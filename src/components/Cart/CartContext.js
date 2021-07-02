import React, { createContext, useState} from 'react'
import imagenes from '../../img/imagenes.js';


export const CartContext = createContext();
const [cartItems, setCartItems] = useState([]);
  
const addItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  
  const RemoveItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

const CartProvider = (props) => {
    const [items, setItems] = useState([
        
        { id: 1, name: "Pajaro", price: 20, description:"bordado pajaro azul", img:imagenes.pajaro},
        { id: 2, name: "Zorro", price: 150, description:"zorro", img:imagenes.zorrito },
        { id: 3, name: "Gato", price: 60, description:"bordado gato", img:imagenes.gato},
        { id: 4, name: "Conejo", price: 100, description:"bordado conejo", img:imagenes.conejo}
    ])

    return <CartContext.Provider value={"HOLA ME DEVOLVI"}>{props.children}</CartContext.Provider>
    
}

export default CartProvider