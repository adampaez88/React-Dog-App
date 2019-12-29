import React, { Component } from 'react'
const imageURL = 'https://dog.ceo/api/breed/hound/images/random/3'


class DogCard extends Component{

    state = {
        dogPics: []
    }

    // componentDidMount(){
    //     fetch(imageURL)
    //         .then(response => response.jsonl())
    //         .then(dogPics => this.setState({dogPics}))
    //         console.log(this.state.dogPics)
    // }

    render(){
        const {dog} = this.props
        return(
            <div className='dog-card'>
                {/* <img src={`https://dog.ceo/api/breed/${dog}/images/random/3`}></img> */}
                <h1>Breed: {dog.name}</h1>
                <h4>Bred for: {dog.bred_for}</h4>
                <h6>Life Span: {dog.life_span}</h6>
                <h6>Height: {dog.height.imperial} inches</h6>
                <h6>Weight: {dog.weight.imperial} lbs</h6>
                <p>{dog.temprament}</p>
            </div>
        )
    }
    
}
export default DogCard;