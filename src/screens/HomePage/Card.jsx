import React from 'react'

const Card = ({popular}) => {
  return (
    <div className='home-card'>
        <img className='home-card-img' src={popular.background_image} alt="" />
        <h1>{popular.name}</h1>
        <h4>Genre: {popular.genres[0]?.name} | {popular.genres[1]?.name} </h4>

        <h4 className={popular.metacritic > 70 ? 'metacritic-good' : popular.metacritic <= 70 ? 'metacritic-okay' : 'metacritic-bad'} >{popular.metacritic}</h4>

    </div>
  )
}

export default Card