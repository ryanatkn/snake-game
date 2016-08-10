import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

/**
 * Renders the current game state with React.
 * Expected to be called each frame of animation.
 * This is a terrible thing to do to the cpu on every frame with unopimtized React components.
 * It's done this way because an interviewer wanted to see how
 * React could be used as the renderer, and this is the simplest thing to start with.
 * Perf could be massively improved with something like MobX or Redux.
 */
export default function renderGame(game) {
  ReactDOM.render(
    <App game={game}/>,
    document.getElementById('root')
  );
}
