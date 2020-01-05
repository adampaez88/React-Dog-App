import React from 'react'

function Auth(props){

    const signUp = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const username = formData.get('username')
        const password = formData.get('password')

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
            .then(response => response.json())
            .then(user => {
                return fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                }).then(response => response.json())
            })
            .then(stashToken => {
                localStorage.setItem('token', stashToken.token)
            })
            event.target.reset()
    }

    const userLogin = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const username = formData.get('username')
        const password = formData.get('password')

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => response.json())
        
        .then(stashToken => {
            localStorage.setItem('token', stashToken.token)
        })
        event.target.reset()
    }

    return(
        <div>
            {props.showSignIn
                   ? <form onSubmit={signUp}>
                    <label>Username: </label>
                    <input type='text' name='username' placeholder='Username' required />
                    <label>Password: </label>
                    <input type='password' name='password' placeholder='Password' required/>
                    <input type='submit' value='submit' />
                </form>
                : null
            }
            {props.showLogin
                ? <form onSubmit={userLogin}>
                    <label>Username: </label>
                    <input type='text' name='username' placeholder='Username' required />
                    <label>Password: </label>
                    <input type='password' name='password' placeholder='Password' required/>
                    <input type='submit' value='submit'  />
                </form>
                : null
            }
        </div>
        
    )
}
export default Auth;