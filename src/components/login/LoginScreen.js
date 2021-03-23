import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {

   const {dispatch} = useContext(AuthContext)

     const handleLogin = () =>{

        dispatch({
            type: types.login,
            payload: {
                name: 'Kevin'
            }
        });

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
