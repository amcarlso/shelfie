import React, {Component} from 'react'

class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
      image: '',
      imageUrlInput: '',
      thingInput: '',
      priceInput: 0
    }
    this.handleImageUrlInput = this.handleImageUrlInput.bind(this)
  }

  handleImageUrlInput(text){
    this.setState({
      imageUrlInput: text
    })
  }

  render(){
    return(
      <div>
        Form
        <input onChange={(e) => this.handleImageUrlInput(e.target.value)} />
      </div>
    )
  }
}

export default Form