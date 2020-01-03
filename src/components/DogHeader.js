import React, { Component } from 'react'
import DogForm from './DogForm'
import DogFilter from './DogFilter'

class DogHeader extends Component{

    state = {
        show: false
    }

    handleClick = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render(){
        const {show} = this.state
        return (
            <>
                <header className='dog-header'>
                    <div className='button-container'>
                        <button onClick={this.handleClick}>
                            {show ? 'Close Form' : 'Add Dog'}
                        </button>
                    </div>
                    <div>
                            <DogFilter updateSearch={this.props.updateSearch} />
                    </div>
        
                    <div className='button-container'>
                        <button>Login</button>
                        <button>Sign up</button>
                    </div>
                </header>
                <div className='new-dog-form'
                    style={{visibility: show ? "visible" : "hidden"}}>
                    <DogForm addDog={this.props.addDog}
                    handleClick={this.handleClick}/> 
                </div>
            </>
        )
    }
}
export default DogHeader;