import React from 'react';
import './App.css';
import pepe from './assets/pepe.gif';
import TechList from './components/TechList'

function App() {
  return (
    <div>
      <h1>
      Pepe dançadero
    </h1>
    <img src={pepe} />
      <TechList />
    </div>
  )
}

export default App;