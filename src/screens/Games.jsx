import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import GamesBoard from '../components/GamesBoard'



const Games = () => {

  const [games, setGames] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios
    .get(`https://api.rawg.io/api/games?key=13a71fe2f7e94906b61a7e1a357e0f8b&page_size=40&page=${page}`)
    .then((res) => {
      console.log(res.data.results)
      setGames(res.data.results)
    })

  },[page])

  const increment = () => {
    setPage(page +1)

  }

  const decrement = () => {
    setPage(page -1)

  }
  return (
    <div>Games

      <GamesBoard games={games} />

      <div>
      <button onClick={page !== 1 ? decrement : null}>Previous</button> 
      <button onClick={increment}>Next</button>
      </div>
    </div>
  )
}

export default Games