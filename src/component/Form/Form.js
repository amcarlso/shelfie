import React, {Component} from 'react'
import axios from 'axios';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      image: '',
      name: '',
      price: ''
    }
    this.handleImageUrlInput = this.handleImageUrlInput.bind(this)
    this.handleThingInput = this.handleThingInput.bind(this)
    this.handlePriceInput = this.handlePriceInput.bind(this)
    this.handleCancelInput = this.handleCancelInput.bind(this)
    this.createThing = this.createThing.bind(this)
  }
  
  handleImageUrlInput(text){
    this.setState({
      image: text
    })
    console.log(text)
  }
  handleThingInput(text){
    this.setState({
      name: text
    })
    console.log(text)
  }
  handlePriceInput(cost){
    this.setState({
      price: cost
    })
    console.log(cost)
  }
  handleCancelInput(){
    this.setState({
      image: '',
      name: '',
      price: ''
    })
    console.log('clicked')
  }
  createThing(){
    const {name, price, image} = this.state
    axios.post('/api/thing', {name, price, image})
    .then(res => {
      this.props.getThingsFn()
      this.handleCancelInput()
    })
  }

  render(){
    return(
      <div>
        <input value={this.state.image} onChange={(e) => this.handleImageUrlInput(e.target.value)} placeholder={'Image url here'} />
        <input value={this.state.name} onChange={(e) => this.handleThingInput(e.target.value)} placeholder={'Thing input here'} />
        <input value={this.state.price} onChange={(e) => this.handlePriceInput(e.target.value)} placeholder={'Add price here'} />
        <button onClick={this.handleCancelInput}>Cancel</button>
        <button onClick={this.createThing}>Add to Inventory</button>
      </div>
      
    )
  }
}

export default Form