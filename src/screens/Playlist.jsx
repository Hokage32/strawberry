import React from 'react'
import {useContext, useEffect, useState, useCallback} from 'react'
import axios from 'axios'
import PlaylistBoard from '../components/PlaylistComponents/PlaylistBoard'
import GlobalState from '../state/GlobalState'
import Spline from '@splinetool/react-spline'


const Playlist = () => {
  const {state} = useContext(GlobalState)
  const [userGames , setUserGames] = useState([])
  const [urls, setUrls] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const settingUrl = () => {
    axios
    .get(`http://localhost:4545/api/getUserGames/${state.userId}`)
    .then((res) => {
      console.log(res.data)
      let urls = res.data.map((g,i) => {
        return `https://api.rawg.io/api/games/${g.game_id}?key=13a71fe2f7e94906b61a7e1a357e0f8b`
      })
      setUrls(urls)
      setIsLoading(false)

    })
    .catch(err => console.log(err))
  }
  
const remove = (index) => {
  setUserGames(prev => {
    let newState = [...prev]
    newState.splice(index, 1)
    return [...newState]
  })
}

  useEffect(() => {
    
    settingUrl()
  //  axios
  //   .get(`http://localhost:4545/api/getUserGames/${state.userId}`)
  //   .then((res) => {
  //     console.log(res.data)
  //     let urls = res.data.map((g,i) => {
  //       return `https://api.rawg.io/api/games/${g.game_id}?key=13a71fe2f7e94906b61a7e1a357e0f8b`
  //     })
  //     setUrls(urls)
  //     setIsLoading(false)

  //   })
  //   .catch(err => console.log(err))

  },[])

  const settingGames = () => {
    if(urls.length !== 0){
      axios.all(urls.map((u, i) => axios.get(u)))
      .then((res) => {
        
        let newState = res.map((r,i) => r.data)
        console.log(newState)
        setUserGames(newState)
        setIsLoading(false)
      })
    }
  }
  useEffect(() => {
    setIsLoading(true)
    settingGames()
    // if(urls.length !== 0){
    //   axios.all(urls.map((u, i) => axios.get(u)))
    //   .then((res) => {
        
    //     let newState = res.map((r,i) => r.data)
    //     console.log(newState)
    //     setUserGames(newState)
    //     setIsLoading(false)
    //   })
    // }
  }, [urls])

  

  return (isLoading ? <div className='glob'><Spline scene="https://prod.spline.design/BVvtapb45s6uXID7/scene.splinecode" /> </div>:
    <div>
      <PlaylistBoard userGames={userGames} settingGames={settingGames} settingUrl={settingUrl} remove={remove}/>
    </div>
  )
}

export default Playlist