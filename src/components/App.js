import React from 'react';
import Renderer from './Renderer';

export default function App({game}) {
  return (
    <div>
      <Renderer game={game}/>
    </div>
  );
}
