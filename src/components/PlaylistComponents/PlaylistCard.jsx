import React from 'react'
import { useNavigate } from 'react-router-dom'
import {MdDeleteForever} from 'react-icons/md'
import { useContext } from 'react'
import GlobalState from '../../state/GlobalState'
import axios from 'axios'

const PlaylistCard = ({userGames,settingGames, settingUrl,remove, index}) => {
    const navigate = useNavigate()
    const {state} = useContext(GlobalState)

    const deleteGame = () => {
      axios
      .delete(`http://localhost:4545/api/deleteUserGame/${userGames.id}/${state.userId}`)
      .then((res) => {
        remove(index)
        console.log(res)
      })
    }

    const handleClick = () => {
        navigate(`/about/${userGames.id}`)
      }
  return (
    <div className='game-card'>
        <img src={userGames.background_image} alt="" />
        <h1>{userGames.name}</h1>
        <h4>Genre: {userGames.genres[0]?.name} {userGames.genres[1]?.name}</h4>
        <h4 className={userGames.metacritic > 70 ? 'metacritic-good' : userGames.metacritic <= 70 ? 'metacritic-okay' : 'metacritic-bad'}>{userGames.metacritic}</h4>

        <div className='add-about' >
            <button className='card-btn' onClick={handleClick}>About</button>
            <button  className='delete-btn' onClick={deleteGame} ><MdDeleteForever size={21}/></button>
            
        </div>
    </div>
  )
}

export default PlaylistCard