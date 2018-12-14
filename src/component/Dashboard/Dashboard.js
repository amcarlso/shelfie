import React, {Component} from 'react'
import Product from './../Product/Product'
import axios from 'axios';

class Dashboard extends Component {
  constructor(props){
    super()
    this.deleteThing = this.deleteThing.bind(this)
  }

  deleteThing(id){
    axios.delete(`/api/thing/id`)
    .then(res => {
      this.props.getThingsFn()
    })
  }

  render(){
    let mapInvList = this.props.inventory.map(thing => {
      return (
        <Product 
          key={thing.thing_id}
          id={thing.thing_id}
          name={thing.name}
          price={thing.price}
          image={thing.image_url}
          deleteThingFn={this.deleteThing}
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