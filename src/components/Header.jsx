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
            <h1>Strawberry</h1>
            <Link to={"/"}>
            <button className='btn'>Home</button>
            </Link>

            <Link to={"/games"}>
            <button className='btn'>All Games</button>
            </Link>

            <Link to={"/playlist"}>
            <button className='btn'>Playlist</button>
            </Link>

            

        </nav>
        <div className='logout'>
          <button onClick={handleLogout}>Logout</button>
        </div>  
    </header>
  )
}

export default Header