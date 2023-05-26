import React from 'react'
import Spline from '@splinetool/react-spline';
import { useState, useContext } from 'react';
import axios from 'axios';
import GlobalState from '../state/GlobalState';



const Auth = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [register, setRegister] = useState(true)

  const {state, dispatch} = useContext(GlobalState)

  const submitHandler = (e) => {
    e.preventDefault()

    const myBod = {
      username: username,
      password: password
    }

    axios
    .post(register ? "http://localhost:4545/register" : "http://localhost:4545/login", myBod)
    .then((res) => {
      console.log(res.data)
      {!register ? dispatch({type: "LOGIN", payload: res.data}) : console.log(res.data)}
    })
    .catch((err) => {
      console.log(err)
    })
    
    
    
  }

  return (

    <main className='login-page'>
      <div className='strawb'>

    <Spline  scene="https://prod.spline.design/nQ9w4LjEuTNIGpr5/scene.splinecode"/>
  
      </div>
      
      <div>
      <form className='auth-form' onSubmit={submitHandler}>
        <h1>Welcome to Strawberry!</h1>
        <input 
        type="text" 
        placeholder='Username'
        className='auth-input'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        
        />
        <input 
        type="text"
        placeholder='Password'
        className='auth-input'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        
        />
        <button className='reg-btn'>{register ? "Register" : "Login"}</button>


    


      </form>
      <div className='register-login'>
      <button onClick={() => {setRegister(!register)}}>{!register ? "Sign up?" : "Login?"} </button>
     </div> 
</div>


    </main>
    
  )
}

export default Auth