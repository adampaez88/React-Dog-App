import React, { Component } from 'react'
// const imageURL = 'https://dog.ceo/api/breed/akita/images/random/1'

class DogCard extends Component{

    state = {
        isClicked: false
    }

    handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }
    

    render(){
        const {isClicked} = this.state
        const {dog} = this.props
        console.log(dog)
        return(
            <div className='dog-card'>
                <img onClick={this.handleClick} src={dog.image_url} className='dog-pic'></img>
                <h1>Breed: {dog.breed}</h1>
                {isClicked
                    ? <div>
                        <h4>Bred for: {dog.bred_for}</h4>
                        <h6>Life Span: {dog.life_span}</h6>
                        <h6>Temperament: {dog.temperament}</h6>
                        <h6>Height: {dog.height} inches</h6>
                        <h6>Weight: {dog.weight} lbs</h6>
                        <p>More Info: <a href={dog.info_url}>{dog.info_url}</a></p>
                    </div>
                    : null
                }
                 
            </div>
        )
    }
}
export default DogCard;