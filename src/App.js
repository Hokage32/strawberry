import React from 'react';
import { Route,Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Games from './screens/Games';
import MyGames from './screens/MyGames';
import Header from './components/Header';
import Footer from './components/Footer';
import Auth from './screens/Auth';
import { useState, useContext } from 'react';
import GlobalState from './state/GlobalState';
import { GlobalStateProvider } from './state/GlobalState';

function App() {

  const {state: {isAuthorized}} = useContext(GlobalState)
  
  
  return (
    <div className="App">
      {isAuthorized ? <Header/> : null}
      <Routes>
        <Route path='/auth' element={!isAuthorized ? <Auth/> : <Navigate to={"/"}/>}/>
        <Route path='/' element={isAuthorized ? <Home/> : <Navigate to={"/auth"}/>}/>
        <Route path='/games' element={isAuthorized ? <Games/> : <Navigate to={"/auth"}/>}/>  
        <Route path='/mygames' element={isAuthorized ? <MyGames/> : <Navigate to={"/auth"}/>}/>


      </Routes>
      
     
    </div>
  );
}

export default App;
