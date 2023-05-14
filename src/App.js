import React from 'react';
import { Route,Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Games from './screens/Games';
import MyGames from './screens/MyGames';
import Header from './components/Header';
import Auth from './screens/Auth';
import { useState } from 'react';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <div className="App">
      {isAuthenticated ? <Header/> : null}
      <Routes>
        <Route path='/auth' element={!isAuthenticated ? <Auth/> : <Navigate to={"/"}/>}/>
        <Route path='/' element={isAuthenticated ? <Home/> : <Navigate to={"/auth"}/>}/>
        <Route path='/games' element={isAuthenticated ? <Games/> : <Navigate to={"/auth"}/>}/>  
        <Route path='/mygames' element={isAuthenticated ? <MyGames/> : <Navigate to={"/auth"}/>}/>


      </Routes>
     
    </div>
  );
}

export default App;
