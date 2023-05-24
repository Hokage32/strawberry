import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

const About = () => {

    const [game, setGame] = useState([])
  
    const {id} = useParams()

    useEffect(()=> {
        axios
        .get(`https://api.rawg.io/api/games/${id}?key=13a71fe2f7e94906b61a7e1a357e0f8b`)
        .then((res) => {
          console.log(res.data)
          setGame(res.data)
        })
    
      }, [])
      
     

  return (
    <div className='about-page'>
        <div className='about-img'>
        <img className='main-img' src={game.background_image} alt="" />
        <img className='screenshot' src={game.background_image_additional} alt="" />
        </div>

        <div className='about-info'>
        <h1>{game?.name}</h1>

        <h2>ESRB: {game.esrb_rating?.name}</h2>
        <h2>Metacritic: {game.metacritic}</h2>
        <h3>Release Date: {game.released}</h3>
        <h3>
            {game.parent_platforms && game?.parent_platforms.map((p) => {
                return <li> {p.platform.name}</li>
            }) }
        </h3>
       <br />
        <h4>{game.description_raw}</h4>
      </div>

    </div>
  )
}

export default About