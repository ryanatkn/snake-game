import React from 'react';
import Renderer from './Renderer';
import './App.css';

export default function App({game}) {
  return (
    <div className="App">
      <Renderer game={game}/>
    </div>
  );
}
