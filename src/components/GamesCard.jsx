import React from 'react'
import {GoPlus} from 'react-icons/go'

const GamesCard = ({games}) => {
    
  return (
    <div className='game-card'>
        <img src={games.background_image} alt="" />
        <h5></h5>
        <h1>{games.name}</h1>
        <h2>{games.esrb_rating?.name} </h2>
       
        <h4 className={games.metacritic > 70 ? 'metacritic-good' : games.metacritic <= 70 ? 'metacritic-okay' : 'metacritic-bad'}>{games.metacritic}</h4>
       

        <div >
            <button className='add-btn' ><GoPlus className='goplus'/></button>
            
        </div>

    </div>
  )
}

export default GamesCard