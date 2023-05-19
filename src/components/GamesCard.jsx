import React from 'react'
import {GoPlus} from 'react-icons/go'
import { motion } from 'framer-motion'
import axios from 'axios'

const GamesCard = ({games}) => {


  // const addToPlaylist = () => {
  //   axios
  //   .get(games.id)
  //   .then((res) => {
  //     console.log(res.data)
  //   })
  // }
    
  return (
    <motion.div className='game-card' whileHover={{scale:1.06}}>
        <img src={games.background_image} alt="" />
        <h5></h5>
        <h1>{games.name}</h1>
        <h4>Genre: {games.genres[0]?.name} {games.genres[1]?.name}</h4>
       
        <h4 className={games.metacritic > 70 ? 'metacritic-good' : games.metacritic <= 70 ? 'metacritic-okay' : 'metacritic-bad'}>{games.metacritic}</h4>
       

        <div className='add-about' >
            <button  className='card-btn' ><GoPlus className='goplus'/></button>
            <button className='card-btn'>About</button>
            
        </div>

    </motion.div>
  )
}

export default GamesCard