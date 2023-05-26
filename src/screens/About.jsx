import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

const About = () => {

    const [game, setGame] = useState([])
    const [screenshot, setScreenshot] = useState([])
  
    const {id} = useParams()

    useEffect(()=> {
        axios
        .get(`https://api.rawg.io/api/games/${id}?key=13a71fe2f7e94906b61a7e1a357e0f8b`)
        .then((res) => {
          console.log(res.data)
          setGame(res.data)
        })
    
      }, [])

      useEffect(()=> {
        axios
        .get(`https://api.rawg.io/api/games/${game.slug}/screenshots?key=13a71fe2f7e94906b61a7e1a357e0f8b`)
        .then((res) => {
         
          setScreenshot(res.data.results)
        })
      })
      
     

  return (
    <div className='about-page'>
    <div className='about-img'>
        <img className='main-img' src={game.background_image} alt="" />
        <div >
          {screenshot.map((s)=> {
            return <img className='screenshot' src={s.image} alt="" />
          })}
        </div>

    </div>
        
    <div>
    <div className='about-info'>
        <h1>{game?.name}</h1>

        <h2>ESRB: {game.esrb_rating?.name}</h2>
    <div className='metacritic-package'>   
        <h2>Metacritic:</h2>
    <div className='meta-box'>
        <h2 
        className={game.metacritic > 70 
        ? 'metacritic-good' 
        : game.metacritic <= 70 
        ? 'metacritic-okay' 
        : 'metacritic-bad'}>
          {game.metacritic}
        </h2>
    </div>
    </div>
        <h3>Release Date: {game.released}</h3>
        <h3>
            {game.parent_platforms && game?.parent_platforms.map((p) => {
                return <li> {p.platform.name}</li>
            }) }
        </h3>
    </div>
       <br />
    <div className='description'>
        <h2>About</h2>
        <br />
        <h4>{game.description_raw}</h4>
    </div>
    </div>
    </div>
  )
}

export default About