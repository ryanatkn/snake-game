import React from 'react';
import repeat from 'lodash/repeat';
import './Instructions.css';

export default function Instructions({game}) {
  return (
    <div className="Instructions">
      <p>use the arrow keys to move</p>
      <p style={{position: 'relative', top: 0, left: -15}}>
        eat apples!
      </p>
      {game.highScore
        ? <p>
            best {game.highScore} apple{game.highScore === 1 ? '' : 's'}{repeat('!', Math.round(game.highScore / 5))}
          </p>
        : null
      }
      <p style={{position: 'relative', top: 55, left: 55}}>
        don't bite yourself
      </p>
    </div>
  );
}
