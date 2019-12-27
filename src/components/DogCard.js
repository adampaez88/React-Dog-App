import React from 'react'

function DogCard({dog}){
    return(
        <div className='dog-card'>
            <h1>{dog.name}</h1>
            <h4>{dog.bred_for}</h4>
            <h6>{dog.life_span}</h6>
            <h6>{dog.height.imperial} inches</h6>
            <h6>{dog.weight.imperial} lbs</h6>
            <p>{dog.temprament}</p>
        </div>
    )
}
export default DogCard;