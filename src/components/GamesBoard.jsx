import React from 'react'
import GamesCard from './GamesCard'

const GamesBoard = ({games}) => {

    const gamesDisplay = games.map((g,i) => {
        return <GamesCard games={g} />
    })


  return (
    <div>
        {gamesDisplay}
    </div>
  )
}

export default GamesBoard