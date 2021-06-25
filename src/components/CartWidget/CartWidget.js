import React, { Component } from 'react'
import './CartWidget.css'

class CartWidget extends Component {
    render() {
        return (
            <div>
                <i className="large material-icons icon-shoppingCart">shopping_cart</i>
            </div>
        )
    }
}

export default CartWidget;