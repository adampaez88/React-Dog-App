import React, { Component } from 'react';
import DogCollection from './components/DogCollection'
import DogHeader from './components/DogHeader'
import DogFooter from './components/DogFooter'
import './App.css';

// const dogURL = 'https://api.thedogapi.com/v1/breeds?limit=172&page=0'
const dogBackend = 'http://localhost:3000/dogs'

class App extends Component{

  state = {
    dogs: []
  }

  // componentDidMount(){
  //   fetch(dogURL , {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'x-api-key': '5ff4f286-9ee7-4a83-b53e-beee788115b5',
  //       'Accept': 'application/json'
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(dogs => this.setState({dogs}))
  // }

    componentDidMount(){
      fetch(dogBackend)
        .then(response => response.json())
        .then(dogs => this.setState({dogs}))
    }
  
  addDog = (dog) => {
    const {dogs} = this.state 
    this.setState({
      dogs: [...dogs, dog]
    })
  }

    render(){
      const {dogs} = this.state
      return (
        <div>
          <header>
            <DogHeader addDog={this.addDog}/>
          </header>
          <div className="dogs">
            <DogCollection dogs={dogs}/>
          </div>
          <footer>
            <DogFooter />
          </footer>
        </div>
    );
  }
}
export default App;