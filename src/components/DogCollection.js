import React from 'react'
import DogCard from './DogCard'

function DogCollection({dogs}){
    const allDogs = dogs.map(dog => {

        return <DogCard dog={dog}/>
    })
    return(
        <div className='card-container'>
            {allDogs}
        </div>
    )
}
export default DogCollection;