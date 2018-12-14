import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header'
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      things: [],
      image: '',
      imageUrlInput: '',
      thingInput: '',
      priceInput: ''
    }
    this.handleImageUrlInput = this.handleImageUrlInput.bind(this)
    this.handleThingInput = this.handleThingInput.bind(this)
    this.handlePriceInput = this.handlePriceInput.bind(this)
    this.handleCancelInput = this.handleCancelInput.bind(this)
  }
  componentDidMount(){
    axios.get('/api/things').then(res => {
      this.setState({ things: res.data })
    })
  }

  handleImageUrlInput(text){
    this.setState({
      imageUrlInput: text
    })
    console.log(text)
  }
  handleThingInput(text){
    this.setState({
      thingInput:text
    })
    console.log(text)
  }
  handlePriceInput(cost){
    this.setState({
      priceInput: cost
    })
    console.log(cost)
  }
  handleCancelInput(){
    this.setState({
      imageUrlInput: '',
      thingInput: '',
      priceInput: ''
    })
    console.log('clicked')
  }
  
  render() {
    console.log(this.state)
    let inventoryList = this.state.things
    
    return (
      <div className="App">
        <Header /> 
        <Dashboard inventory={inventoryList}/>
        <Form 
          hImageUrlInput={this.handleImageUrlInput}
          hThingInput={this.handleThingInput}
          hPriceInput={this.handlePriceInput}
          thingInput={this.state.thingInput}
          priceInput={this.state.priceInput}
          imageUrlInput={this.state.imageUrlInput}
          hCancelInput={this.handleCancelInput}
        />
      </div>
    );
  }
}

export default App;
