import React from 'react';
import { Route,Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from '../src/screens/HomePage/Home'
import Games from './screens/Games';
import Playlist from './screens/Playlist';
import Header from './components/Header';
import Footer from './components/Footer';
import Auth from './screens/Auth';
import About from './screens/About';
import { useState, useContext } from 'react';
import GlobalState from './state/GlobalState';


function App() {

  const {state: {isAuthorized}} = useContext(GlobalState)
  
  
  return (
    <div className="App">
      {isAuthorized ? <Header/> : null}
      <Routes>
        <Route path='/auth' element={!isAuthorized ? <Auth/> : <Navigate to={"/"}/>}/>
        <Route path='/' element={isAuthorized ? <Home/> : <Navigate to={"/auth"}/>}/>
        <Route path='/games' element={isAuthorized ? <Games/> : <Navigate to={"/auth"}/>}/>  
        <Route path='/playlist' element={isAuthorized ? <Playlist/> : <Navigate to={"/auth"}/>}/>
        <Route path="/about/:id" element={<About/>}/>
      </Routes>
      <Footer/>
      
     
    </div>
  );
}

export default App;
