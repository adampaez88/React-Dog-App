import React, { Component } from 'react'


class DogForm extends Component{

    state = {
        breed: '',
        bred_for: '',
        life_span: '',
        height: '',
        weight: '',
        temperament: '',
        image_url: '',
        info_url: ''
    }

    

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDog(this.state)
        this.setState({
            breed: '',
            bred_for: '',
            life_span: '',
            height: '',
            weight: '',
            temperament: '',
            image_url: '',
            info_url: ''  
        })
        this.props.handleClick()
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

                    <input 
                    placeholder='Breed'
                    type='text'
                    name='breed'
                    onChange={this.handleChange}
                    value={this.state.breed}
                    required
                    ></input>
                    <label> </label>
                    <input 
                    placeholder='Bred For'
                    type='text'
                    name='bred_for'
                    onChange={this.handleChange}
                    value={this.state.bred_for}
                    required
                    ></input>
                    <label> </label>
                    <input
                    type='text'
                    placeholder='Life Span'
                    name='life_span'
                    onChange={this.handleChange}
                    value={this.state.life_span}
                    required
                    ></input>
                    <label> </label>
                    <input
                    type='text'
                    placeholder='Height'
                    name='height'
                    onChange={this.handleChange}
                    value={this.state.height}
                    required
                    ></input>
                    <label> </label>
                    <input
                    placeholder='Weight'
                    type='text'
                    name='weight'
                    onChange={this.handleChange}
                    value={this.state.weight}
                    required
                    ></input>
                    <label> </label>
                    <input
                    placeholder='Temperament'
                    type='text'
                    name='temperament'
                    onChange={this.handleChange}
                    value={this.state.temperament}
                    required
                    ></input>
                    <label> </label>
                    <input
                    placeholder='Image URL'
                    type='text'
                    name='image_url'
                    onChange={this.handleChange}
                    value={this.state.image_url}
                    required
                    ></input>
                    <label> </label>
                    <input
                    placeholder='Info URL'
                    type='text'
                    name='info_url'
                    onChange={this.handleChange}
                    value={this.state.info_url}
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