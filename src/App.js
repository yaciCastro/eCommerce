import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar'

//Escribir componentes: function y clase
// componentes clases definidos mediante clase
//poseen metodo importante llamado render
//extends esta relacionado a herencia, la calse app hereda de  react.component
//los componentews tipo clase se usaban para guardad un estado
//poseeen ciclos de vida d elos componentes
//state y lifecycle metodos no lo poseian componentes de tipo function
//antes functiom solo devolvia jsxn se los denominaba dumby

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
      </div>
    )
  }
}

export default App;