import React from 'react'
import {GoPlus} from 'react-icons/go'
import {RiCheckFill} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { useContext,useState } from 'react'
import GlobalState from '../../state/GlobalState'
import axios from 'axios'

const Card = ({popular}) => {

  const {state} = useContext(GlobalState)
  const navigate = useNavigate()
  const [clicked, setClicked] = useState(false)
  
    const addToPlaylist = () => {
      axios
      .post(`http://localhost:4545/api/addToPlaylist/${popular.id}/${state.userId}`)
  
      .then((res) => {
        console.log(res.data)
        setClicked(!clicked)
      })
  
    }
    
  
    const handleClick = () => {
      navigate(`/about/${popular.id}`)
    }






  return (
    <div className='home-card'>
        <img className='home-card-img' src={popular.background_image} alt="" />
        <h1>{popular.name}</h1>
        <h4>Genre: {popular.genres[0]?.name} | {popular.genres[1]?.name} </h4>

        <h4 className={popular.metacritic > 70 ? 'metacritic-good' : popular.metacritic <= 70 ? 'metacritic-okay' : 'metacritic-bad'} >{popular.metacritic}</h4>
        <div className='add-about'>
        <button onClick={handleClick} className='card-btn'>About</button>
        <button onClick={addToPlaylist} className='add-btn'> {!clicked ? <GoPlus size={15}/> : <RiCheckFill size={15} height={30} width={15} />}</button>
        </div>
    </div>
  )
}

export default Card