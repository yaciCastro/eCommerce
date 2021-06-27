import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

//COMPONENTS
import NavBar from './components/NavBar/NavBar'
import ItemList from './components/Item/ItemList.js'
import ItemDetail from './components/Item/ItemDetail';

//VIEWS
import Servicios from './views/Servicios/Servicios.js'
import Diseños from './views/Diseños/Diseños.js'
import Galeria from './views/Galeria/Galeira.js'
import Contacto from './views/Contacto/Contacto.js'

//IMG
import imagenes from './img/imagenes.js';

//await esperar dice espera a que el fetch termine
//funciones que devuelven promesas son funciones asincromas 
// 

const itemsData = [
  { id: 1, name: "Pajaro", price: 20, description:"bordado pajaro azul", img:imagenes.pajaro},
  { id: 2, name: "Zorro", price: 150, description:"zorro", img:imagenes.zorrito },
  { id: 3, name: "Gato", price: 60, description:"bordado gato", img:imagenes.gato},
  { id: 4, name: "Conejo", price: 100, description:"bordado conejo", img:imagenes.conejo}
];

function App() {
  const [items] = useState(itemsData);
  return (  

      <div>
        <Router>
            <NavBar/>            
            <ItemList className="center" data={items}/>  
            <Switch>
              <Route path='/servicios' exact component={Servicios}></Route>
              <Route path='/diseños'  exact component={Diseños}></Route>
              <Route path='/galeria'  exact component={Galeria}></Route>
              <Route path='/contacto'  exact component={Contacto}></Route>
              <Route path='/ItemDetail'  exact component={ItemDetail}></Route>
            </Switch>
        </Router>
        
      </div>     
    )
}


export default App;
