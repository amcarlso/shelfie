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
      things: []
    }
    
    this.componentDidMount = this.componentDidMount.bind(this)
    this.getThings = this.getThings.bind(this)
  }
  componentDidMount(){
    this.getThings()
  }

  getThings(){
    axios.get('/api/things').then(res => {
      this.setState({ things: res.data })
    })
  }
  
  render() {
    console.log(this.state)
    let inventoryList = this.state.things
    
    return (
      <div className="App">
        <Header /> 
        <Dashboard 
        inventory={inventoryList}
        getThingsFn = {this.getThings}
        />
        <Form 
          getThingsFn = {this.getThings}
        />
      </div>
    );
  }
}

export default App;
