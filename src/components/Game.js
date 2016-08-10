import React from 'react';
import Score from './Score';
import Entity from './Entity';
import './Game.css';

export default function Game({game}) {
  return (
    <div className="Game">
      <ul className="Game-entities">
        {game.tiles.map((t) => (
          <Entity key={t.id} entity={t}/>
        ))}
        {game.apples.map((a) => (
          <Entity key={a.id} entity={a}/>
        ))}
        {game.snake.segments.map((s) => (
          <Entity key={s.id} entity={s}/>
        ))}
      </ul>
      <Score score={game.score}/>
    </div>
  );
}