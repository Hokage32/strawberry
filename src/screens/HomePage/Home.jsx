import React from 'react'
import { useContext, useState, useEffect, useRef } from 'react'
import GlobalState from '../../state/GlobalState'
import axios from 'axios'
import Card from './Card'
import {motion} from 'framer-motion'

const Home = () => {
const {state} = useContext(GlobalState)
const [popularGames, setPopularGames] = useState([])
const [newGames, setNewGames] = useState([])

const carousel = useRef()

const popular = async () => {
  await axios
  .get('https://api.rawg.io/api/games?key=c9278b30be764ecbabed3201d20a4a65&dates=2022-01-01,2022-12-30&ordering=-rating-updated')
  .then((res) => {
    console.log(res.data.results)
    setPopularGames(res.data.results)
  })
}

// const newGame = async () => {
//   await 
// }


useEffect(()=> {
  popular()
  axios
  .get('https://api.rawg.io/api/games?key=c9278b30be764ecbabed3201d20a4a65&dates=2023-01-01,2023-12-30&ordering=-added&page_size=20')
  .then((response) => {
    console.log(response.data.results)
    setNewGames(response.data.results)
  })
},[])
  return (
    <div>
      <div className='mission'>
      <h1>Hi, {state.username}!</h1>
      <br />
      
      <h3>At Strawberry, our mission is to provide gamers with a comprehensive platform that celebrates their passion for video games. We strive to offer a curated collection of games. Our goal is to make it easy for gamers of all backgrounds to find their favorite games,and stay up-to-date with the latest releases. With our user-friendly interface, powerful search capabilities, and innovative features, we aim to empower gamers to create their ultimate gaming journey, and create a playlist of games they would like to play. Join us and embark on an exciting adventure in the world of gaming! </h3>
    </div>

    <h2>Popular in 2022</h2>
    <div className='carousel-box'>
    <motion.div ref={carousel} className='carousel'>
      <motion.div drag='x'dragConstraints={{right:0, left: -15500}} className='inner-carousel' >
        {popularGames.map((popular) => {
          return (
            <motion.div className='inner-inner-carousel'>
              <Card popular={popular} />

            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
</div>
    <h2>New and Upcoming</h2>

   
    </div>
  )
}

export default Home