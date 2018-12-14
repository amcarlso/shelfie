import React, {Component} from 'react'
import Product from './../Product/Product'

class Dashboard extends Component {

  render(){
    let mapInvList = this.props.inventory.map(thing => {
      return (
        <Product 
          key={thing.thing_id}
          id={thing.thing_id}
          name={thing.name}
          price={thing.price}
          image={thing.image_url}
        />
      )
    })
    return(
      <div>
        Dashboard
        {mapInvList}
      </div>
      
    )
  }
}

export default Dashboard