import React, { Component } from 'react'

class DogForm extends Component{

    state = {
        breed: '',
        name: '',
        age: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDog(this.state)
        this.setState({

        })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input 
                    placeholder='Name'
                    name='name'
                    required
                    onChange={this.handleChange}
                    value={this.state.name}
                    ></input>
                    <label>Breed:</label>
                    <input 
                    name='breed'
                    placeholder='Breed'
                    required
                    onChange={this.handleChange}
                    value={this.state.breed}>Breed:</input>
                    <label>Age:</label>
                    <input
                    name='age'
                    placeholder='Age'
                    required
                    onChange={this.handleChange}
                    value={this.state.age}></input>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }

}
export default DogForm;