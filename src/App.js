import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

//COMPONENTS
import NavBar from './components/NavBar/NavBar'
import ItemDetail from './components/Item/ItemDetail';

//VIEWS
import Servicios from './views/Servicios/Servicios.js'
import Productos from './views/Productos/Productos.js'
import Inicio from './views/Inicio/Inicio.js'
import Contacto from './views/Contacto/Contacto.js'

function App() {
  return (  
      <div>  
        <Router>          
            <NavBar/>
            <Switch>
              <Route path='/inicio' component={Inicio}></Route>
              <Route path='/servicios' component={Servicios}></Route>
              <Route path='/productos'  component={Productos}></Route>
              <Route path='/contacto'  component={Contacto}></Route>
              <Route path='/itemDetail/:id'  component={ItemDetail}></Route>
            </Switch>
        </Router>
      </div>     
    )
}


export default App;
