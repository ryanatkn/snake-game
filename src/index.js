import GameState from './models/GameState';
import initGameState from './actions/initGameState';
import createGameLoop from './utils/createGameLoop';
import updateGame from './actions/updateGame';
import renderGame from './actions/renderGame';
import initInput from './actions/initInput';
import './index.css';

const game = window.game = new GameState(); // create the game state object, analogous to a Flux store or Redux root state
initGameState(game); // set up the initial game state
initInput(game);

window.cancelGameLoop = createGameLoop((dt) => {
  // Run all logic on the game for this time delta (dt).
  // The update function is expected to be run at least every 30-60fps.
  updateGame(game, dt);
  
  // Tell our renderer to update.
  // This could be refactored depending on the render method,
  // but in this case we're telling React to redraw at 60fps, which is not recommended!
  renderGame(game);
});

console.log('Game started! Use `window.cancelGameLoop()` to stop it.');