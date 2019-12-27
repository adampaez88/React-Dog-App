import React, { Component } from 'react';
import DogCollection from './components/DogCollection'
import './App.css';

class App extends Component{

  state = {
    dogs: [],
    selectedDog: null
  }

  componentDidMount(){
    fetch('https://api.thedogapi.com/v1/breeds?limit=25&page=0', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '5ff4f286-9ee7-4a83-b53e-beee788115b5',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(dogs => this.setState({dogs}))
  }
    
    render(){
      const {dogs, selectedDog} = this.state
      return (
        <div className="App">
          <DogCollection dogs={dogs}/>
        </div>
    );
  }
}
export default App;