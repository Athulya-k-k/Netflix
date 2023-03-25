import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {originals,action,ComedyMovies,HorrorMovies } from './urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Banner /> 
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action Movies' isSmall />
      <RowPost url={ComedyMovies} title='Comedy Movies' isSmall />
      <RowPost url={HorrorMovies} title='Horror Movies' isSmall />
    </div>
  );
}

export default App;
