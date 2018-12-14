import React, {Component} from 'react'

class Form extends Component {

  render(){
    return(
      <div>
        Form
        <input value={this.props.imageUrlInput} onChange={(e) => this.props.hImageUrlInput(e.target.value)} placeholder={'Image url here'} />
        <input value={this.props.thingInput} onChange={(e) => this.props.hThingInput(e.target.value)} placeholder={'Thing input here'} />
        <input value={this.props.priceInput} onChange={(e) => this.props.hPriceInput(e.target.value)} placeholder={'Add price here'} />
        <button onClick={this.props.hCancelInput}>Cancel</button>
        <button>Add to Inventory</button>
      </div>
      
    )
  }
}

export default Form