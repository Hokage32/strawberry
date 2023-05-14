import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>Strawberry</h1>
        <nav>

            <Link to={"/"}>
            <button className='btn'>Home</button>
            </Link>

            <Link to={"/games"}>
            <button className='btn'>Games</button>
            </Link>

            <Link to={"/mygames"}>
            <button className='btn'>My Games</button>
            </Link>

        </nav>

    </header>
  )
}

export default Header