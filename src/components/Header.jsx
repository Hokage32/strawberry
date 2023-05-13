import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({auth}) => {
  return (
    <header>
        <h1>Strawberry</h1>
        <nav>

            <Link to={"/"}>
            {auth ? <button className='btn'>Home</button> : null}
            </Link>

            <Link to={"/games"}>
            {auth ? <button className='btn'>Games</button> : null}
            </Link>

            <Link to={"/mygames"}>
            {auth ? <button className='btn'>My Games</button> : null}
            </Link>

        </nav>

    </header>
  )
}

export default Header