import React from 'react';
import Score from './Score';
import Entity from './Entity';
import Instructions from './Instructions';
import './Renderer.css';

/**
 * A Renderer is something that transforms the game state into pixels on screen.
 * This uses React components to render the game state.
 */
export default function Renderer({game}) {
  return (
    <div className="Renderer" style={{width: game.mapWidthPx, height: game.mapHeightPx}}>
      <ul className="Renderer-entities Renderer-layer">
        <ul className="Renderer-tiles Renderer-layer">
          {game.tiles.map((t) => (
            <Entity key={t.id} entity={t}/>
          ))}
        </ul>
        <ul className="Renderer-apples Renderer-layer">
          {game.apples.map((a) => (
            <Entity key={a.id} entity={a}/>
          ))}
        </ul>
        <ul className="Renderer-snake Renderer-layer">
          {game.snake.segments.map((s) => (
            <Entity key={s.id} entity={s}/>
          ))}
        </ul>
      </ul>
      <Score score={game.score}/>
      {game.score === 0 ? <Instructions game={game}/> : null}
    </div>
  );
}