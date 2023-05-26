import React from 'react'
import { Link } from 'react-router-dom'
import GlobalState from '../state/GlobalState'
import { useContext } from 'react'
import bookmark from '../images/bookmark.svg'
import roof from '../images/roof.svg'
import controller from '../images/controller.svg'
import logout from '../images/logout.svg'
import { motion } from 'framer-motion'

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
            <motion.img whileHover={{scale:1.2}} className='svg' src={roof} alt="" />
            </Link>

            <Link to={"/games"}>
            <motion.img whileHover={{scale:1.2}} className='svg' src={controller} alt="" />
            </Link>

            <Link to={"/playlist"}>
            <motion.img whileHover={{scale:1.2}} className='svg' src={bookmark} alt="" />
            </Link>

            

        </nav>
        <div className='logout'>
          <motion.img whileHover={{scale:1.2}} onClick={handleLogout} className='svg' src={logout}/>
        </div>  
    </header>
  )
}

export default Header