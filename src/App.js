import React from 'react';
import './App.css';
import Tile from './components/Tile';

function App() {
  return (
    <div>
      <Tile />
      <Tile primary><p>Hola</p></Tile>
    </div>
  );
}

export default App;
