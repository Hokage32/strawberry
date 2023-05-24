import React from 'react'
import { useContext, useState, useEffect } from 'react'
import GlobalState from '../state/GlobalState'
import axios from 'axios'

const Home = () => {
const {state} = useContext(GlobalState)

// useEffect(() => {
//   axios.get

// }, [])

  return (
    <div>
      <h1>Hi, {state.username}!</h1>
    </div>
  )
}

export default Home