import React from 'react'
import { Link } from 'react-router-dom'
import GlobalState from '../state/GlobalState'
import { useContext } from 'react'
import Strawberry from '../images/Strawberry.png'

const Header = () => {
  const {state, dispatch} = useContext(GlobalState)

  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
  }
  return (
    <header>
        
        <nav>

            <Link to={"/"}>
            <button className='btn'>Home</button>
            </Link>

            <Link to={"/games"}>
            <button className='btn'>All Games</button>
            </Link>

            <Link to={"/mygames"}>
            <button className='btn'>Playlist</button>
            </Link>

            <button onClick={handleLogout}>Logout</button>

        </nav>

    </header>
  )
}

export default Header