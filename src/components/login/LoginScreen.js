import React from 'react'

export const LoginScreen = ({ history }) => {
     const handleLogin = () =>{

        //history.push('/');
        history.replace('/');
     }

    return (
        <div className='container-xl mt-4'>
            <h1>Login Screen</h1>

            <br/>
            <br/>
            <br/>
            <button className="btn btn-outline-light"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
