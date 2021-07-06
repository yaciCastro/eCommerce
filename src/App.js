import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch, useParams} from "react-router-dom";


//COMPONENTS
import NavBar from './components/NavBar/NavBar'
import CartProvider from './components/Cart/CartContext';

//VIEWS
import Servicios from './views/Servicios/Servicios.js'
import Productos from './views/Productos/Productos.js'
import Inicio from './views/Inicio/Inicio.js'
import Contacto from './views/Contacto/Contacto.js'
import ItemDetailContainerView from './views/ItemDetailView/ItemDetailView'
import Cart from './components/Cart/Cart'


function App() {
  const {id} = useParams();
  return (  
        <div>  
        <CartProvider>
            <Router>          
                <NavBar/>
                <Switch>
                  <Route path='/' exact component={Inicio}/>
                  <Route path='/servicios' component={Servicios}/>
                  <Route path='/productos/:categoryId'  component={Productos}/>
                  <Route path='/contacto'  component={Contacto}/>
                  <Route path='/itemDetail/:id'  component={ItemDetailContainerView}/>
                  <Route path='/cart' component={Cart}/>
                </Switch>
            </Router>
          </CartProvider> 
        </div>
          
    )
}


export default App;
