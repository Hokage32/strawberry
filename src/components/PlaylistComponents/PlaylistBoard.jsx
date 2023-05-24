import React from 'react'
import PlaylistCard from './PlaylistCard'

const PlaylistBoard = ({userGames,settingGames, settingUrl, remove}) => {

    const userGameDisplay = userGames.map((g, i) => {
        return <PlaylistCard userGames={g} settingGames={settingGames} settingUrl={settingUrl} remove={remove} index={i} key={g.name + i}/>
    })
  return (
    <div className='game-container'>
        {userGameDisplay}
    </div>
  )
}

export default PlaylistBoard