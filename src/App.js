import React from 'react';
import './App.css';
import reactLogo from './assets/React.jpg';
import TechList from './components/TechList'

function App() {
  return (
    <div>
      <h1>
      React JS
    </h1>
    <img src={reactLogo} />
      <TechList />
    </div>
  )
}

export default App;
