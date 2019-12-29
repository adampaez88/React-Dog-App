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
            breed: '',
            name: '',
            age: ''
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
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input 
                    placeholder='Name'
                    name='name'
                    onChange={this.handleChange}
                    value={this.state.name}
                    required
                    ></input>
                    <label>Breed: </label>
                    <input 
                    name='breed'
                    placeholder='Breed'
                    onChange={this.handleChange}
                    required
                    value={this.state.breed}
                    ></input>
                    <label>Age: </label>
                    <input
                    name='age'
                    placeholder='Age'
                    required
                    onChange={this.handleChange}
                    value={this.state.age}
                    ></input>
                    <input 
                    className='form-input'
                    type='submit'
                    ></input>
                </form>
            </>
        )
    }

}
export default DogForm;