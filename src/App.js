import React from 'react';
import Area from './Area'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <nav></nav>

      <Area />

      <footer></footer>
    </div>
  );
}

export default App;
