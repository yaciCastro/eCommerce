import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'

class ItemCount extends Component{

    constructor(){
        super();
        this.state = {
            count: 1,
            stock:  5,
            initial: 1
            
        }
    }

    handleCounterUp = (stock) => {
        this.setState({count: this.state.count + 1 && this.state.count === stock && this.setState({count: this.state.count + 0})})
    }

    handleCounterDown = (initial) => {
        this.setState({count: this.state.count - 1 && this.state.count === initial && this.setState({count: this.state.count - 0})})
       
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleCounterUp} primary>+</Button>
                <p>{this.state.count}</p>
                <Button onClick={this.handleCounterDown} primary>-</Button>
                <Button> agregar al carrito</Button>
            </div>
        )
    }
}

export default ItemCount;   
