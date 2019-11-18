import React from 'react';
import './App.css';
import Tiles from './components/Tile';

function App() {
  return (
    <div>
      <Tiles />
      <Tiles>Hola</Tiles>
    </div>
  );
}

export default App;
