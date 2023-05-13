import React from 'react'
import Spline from '@splinetool/react-spline';
import { useState, useContext } from 'react';
const Auth = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [register, setRegister] = useState(true)



  return (
    <main>
      <h1>Welcome to Strawberry!</h1>
      <form className='auth-form'>
        <input type="text" />




      </form>




    </main>
    
  )
}

export default Auth