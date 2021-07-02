import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


//COMPONENTS
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import CartProvider from './components/Cart/CartContext';

//VIEWS
import Servicios from './views/Servicios/Servicios.js'
import Productos from './views/Productos/Productos.js'
import Inicio from './views/Inicio/Inicio.js'
import Contacto from './views/Contacto/Contacto.js'

function App() {
  return (  
      <CartProvider>
        <div>  
          <Router>          
              <NavBar/>
              <Switch>
                <Route path='/inicio' component={Inicio}/>
                <Route path='/servicios' component={Servicios}/>
                <Route path='/productos'  component={Productos}/>
                <Route path='/contacto'  component={Contacto}/>
                <Route path='/itemDetail'  component={ItemDetailContainer}/>
                <Route path='/cart' component={Cart}/>
              </Switch>
          </Router>
        </div>
      </CartProvider>     
    )
}


export default App;
