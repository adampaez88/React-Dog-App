import React from 'react'

function DogHeader(props){
    return (
        <header className='dog-header'>
            <div className='button-container'>
                <button> <a href='localhost:3000'>Home</a></button>
                <button>Add Dog</button>
            </div>

            <div className='button-container'>
                <button>Login</button>
                <button>Sign up</button>
            </div>
        </header>
    )
}
export default DogHeader;