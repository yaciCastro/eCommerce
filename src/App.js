import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/CartWidget/ItemListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <ItemListContainer greetings="Lista"/>
      </div>
    )
  }
}

export default App;
