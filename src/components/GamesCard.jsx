import React from 'react'
import {GoPlus} from 'react-icons/go'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import GlobalState from '../state/GlobalState'
import axios from 'axios'

const GamesCard = ({games}) => {
const {state} = useContext(GlobalState)
const navigate = useNavigate()

  const addToPlaylist = () => {
    axios
    .post(`http://localhost:4545/api/addToPlaylist/${games.id}/${state.userId}`)

    .then((res) => {
      console.log(res.data)
    })
  }
  

  const handleClick = () => {
    navigate(`/about/${games.id}`)
  }
    
  return (
    <motion.div className='game-card' whileHover={{scale:1.06}}>
        <img src={games.background_image} alt="" />
        <h5></h5>
        <h1>{games.name}</h1>
        <h4>Genre: {games.genres[0]?.name} {games.genres[1]?.name}</h4>
       
        <h4 className={games.metacritic > 70 ? 'metacritic-good' : games.metacritic <= 70 ? 'metacritic-okay' : 'metacritic-bad'}>{games.metacritic}</h4>
       

        <div className='add-about' >
            <button className='card-btn' onClick={handleClick}>About</button>
            <button  className='add-btn' onClick={addToPlaylist} ><GoPlus size={15}/></button>
            
        </div>

    </motion.div>
  )
}

export default GamesCard