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
  { id: 1, name: "Pajaro", price: 20, descriptio:"bordado pajaro azul", img:'./img/pajaro'},
  { id: 2, name: "Conejo", price: 10,description:"bordado conejo", img:'./img/conejo' },
  { id: 3, name: "Zorro", price: 300, description:"zorro", img:'./img/zorro' },
  { id: 4, name: "Gato", price: 860, description:"bordado gato", img:'./img/gato'}
];
function App() {
  const [items] = useState(itemsData);
  return (  

      <div>
        <NavBar data={items}/>
        <ItemList data={items}/>
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
