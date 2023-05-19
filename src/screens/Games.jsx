import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import GamesBoard from '../components/GamesBoard'
import { motion } from 'framer-motion'



const Games = () => {

  const [games, setGames] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [emptySearch, setEmptySearch] = useState(true)
   useEffect(() => {
  {emptySearch 
    
    ?
 
    axios
    .get(`https://api.rawg.io/api/games?key=13a71fe2f7e94906b61a7e1a357e0f8b&page_size=40&page=${page}`)
    .then((res) => {
      console.log(res.data.results)
      setGames(res.data.results)
    })

    :
  
    setTimeout(() => {
      axios
    .get(`https://api.rawg.io/api/games?key=13a71fe2f7e94906b61a7e1a357e0f8b&search=${search}`)
    .then((res) => {
      console.log(res.data.results)
      setGames(res.data.results)
    })
    },1000)

}
},[page,search])


  const increment = () => {
    setPage(page +1)

  }

  const decrement = () => {
    setPage(page -1)

  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setEmptySearch(false)
  }
  return (
    <div>
      <div className='search-bar'>
      <input
       type="text"
       value={search}
       onChange={handleSearch}
       placeholder='Search'
      />
      </div>

      <GamesBoard games={games} />

      <div  className='next-prev'>
      <button onClick={page !== 1 ? decrement : null}>Previous</button> 
      <button onClick={increment}>Next</button>
      </div>
    </div>
  )
}

export default Games