import React from 'react'

const GamesCard = ({games}) => {
  return (
    <div className='game-card'>
        <img src={games.background_image} alt="" />
        <h1>{games.name}</h1>
        <h2>ESRB: {games.esrb_rating.name}</h2>

    </div>
  )
}

export default GamesCard