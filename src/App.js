import React, { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Servicios from './components/Servicios/Servicios.js'
import Diseños from './components/Diseños/Diseños.js'
import Galeria from './components/Galeria/Galeira.js'
import Contacto from './components/Contacto/Contacto.js'
import ItemList from './components/CartWidget/ItemList.js'

const itemsData = [
  { id: 1, name: "Pajaro", price: 20, description:"bordado pajaro azul", img:'./img/pajaro.jpg'},
  { id: 2, name: "Zorro", price: 150, description:"zorro", img:'./img/zorrito.jpg' },
  { id: 3, name: "Gato", price: 60, description:"bordado gato", img:'./img/gato.jpg'},
  { id: 5, name: "Conejo", price: 100, description:"bordado conejo", img:'./img/conejo.jpg'}
];
function App() {
  const [items] = useState(itemsData);
  return (  

      <div>
        <NavBar/>
        <ItemList className="center" data={items}/>
        <Router>
          <Switch>
            <Route path='/' exact component={App}/>
              <Route path='/servicios' component={Servicios}/>
              <Route path='/diseños'  component={Diseños}/>
              <Route path='/galeria'  component={Galeria}/>
              <Route path='/contacto'  component={Contacto}/>
          </Switch>
          </Router>
      </div>     
    )
}


export default App;
