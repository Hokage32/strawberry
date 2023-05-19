import React from 'react'
import GamesCard from './GamesCard'


const GamesBoard = ({games,}) => {

    const gamesDisplay = games
    
    .map((g,i) => {
        return <GamesCard games={g} key={g.id}/>
    })


  return (
    <div className='game-container'>
        {gamesDisplay}
    </div>
  )
}

export default GamesBoard