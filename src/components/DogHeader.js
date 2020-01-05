import React, { Component } from 'react'
import DogForm from './DogForm'
import DogFilter from './DogFilter'
import Auth from './Auth'

class DogHeader extends Component{

    state = {
        show: false,
        signUp: false,
        login: false
    }

    handleClick = () => {
        this.setState({
            show: !this.state.show
        })
    }

    showSignUp = (event) => {
        this.setState({
            signUp: !this.state.signUp
        })
    }

    showLogin = (event) => {
        this.setState({
            login: !this.state.login
        })
    }

    
    logout = (event) => {
        localStorage.removeItem('token')
    }

    render(){
        const {show, signUp, login} = this.state
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
                        <button onClick={this.showLogin}>Login</button>
                        <button onClick={this.showSignUp}>Sign up</button>
                        <button onClick={this.logout}>Logout</button>
                        {login ? <Auth showLogin={this.state.login}/> : null}
                        {signUp ? <Auth showSignIn={this.state.signUp}/> : null}
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