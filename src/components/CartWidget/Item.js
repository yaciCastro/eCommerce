import React, {Component} from 'react'

class Item extends Component{

    render(){
        return(
            <div>
               <a>{this.props.id},{this.props.title},{this.props.description},
               {this.props.price},{this.props.picture},{this.props.pictureUrl}</a>
            </div>
        )
    }
}
export default Item;