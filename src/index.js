import GameState from './models/GameState';
import initGameState from './actions/initGameState';
import initGameLoop from './actions/initGameLoop';
import updateGame from './actions/updateGame';
import renderGame from './actions/renderGame';
import initInput from './actions/initInput';
import './index.css';

const game = window.game = new GameState();
initGameState(game);
initInput(game);

initGameLoop(game, (dt) => {
  updateGame(game, dt);
  renderGame(game);
});
