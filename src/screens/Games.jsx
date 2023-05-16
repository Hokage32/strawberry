import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import GamesBoard from '../components/GamesBoard'



const Games = () => {

  const [games, setGames] = useState([])

  useEffect(() => {
    axios
    .get("https://api.rawg.io/api/games?key=13a71fe2f7e94906b61a7e1a357e0f8b")
    .then((res) => {
      console.log(res.data.results)
      setGames(res.data.results)
    })

  },[])
  return (
    <div>Games

      <GamesBoard games={games} />
    </div>
  )
}

export default Games