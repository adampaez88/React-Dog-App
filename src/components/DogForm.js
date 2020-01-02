import React, { Component } from 'react'

class DogForm extends Component{

    state = {
        breed: '',
        bred_for: '',
        life_span: '',
        height: '',
        weight: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDog(this.state)
        this.setState({
            name: '',
            bred_for: '',
            life_span: '',
            height: '',
            weight: ''  
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
                    <label>Breed: </label>
                    <input 
                    placeholder='Breed'
                    // type='text'
                    name='name'
                    onChange={this.handleChange}
                    value={this.state.name}
                    required
                    ></input>
                    <label>Bred For: </label>
                    <input 
                    placeholder='Bred For'
                    type='text'
                    name='bred_for'
                    onChange={this.handleChange}
                    value={this.state.bred_for}
                    required
                    ></input>
                    <label>Life Span: </label>
                    <input
                    type='text'
                    placeholder='Life Span'
                    name='life_span'
                    onChange={this.handleChange}
                    value={this.state.life_span}
                    required
                    ></input>
                    <label>Height: </label>
                    <input
                    type='text'
                    placeholder='Height'
                    name='height'
                    onChange={this.handleChange}
                    value={this.state.height}
                    required
                    ></input>
                    <label>Weight: </label>
                    <input
                    placeholder='Weight'
                    type='text'
                    name='weight'
                    onChange={this.handleChange}
                    value={this.state.weight}
                    required
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