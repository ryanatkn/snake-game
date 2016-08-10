/**
 * Initializes input for the game, listening to DOM event listeners that update game state.
 */
export default function initInput(game) {
  document.body.addEventListener('keydown', (e) => {
    updateKeyDown(game, e.keyCode);
  });
}

export const KeyCode = { // see http://keycode.info/
  Up: 38, // up arrow
  Down: 40, // down arrow
  Left: 37, // left arrow
  Right: 39, // right arrow
};

export function updateKeyDown(game, keyCode) {
  switch (keyCode) {
    case KeyCode.Up:
      game.inputDir = 'up';
      break;
    case KeyCode.Down:
      game.inputDir = 'down';
      break;
    case KeyCode.Left:
      game.inputDir = 'left';
      break;
    case KeyCode.Right:
      game.inputDir = 'right';
      break;
    default:
      break;
  }
}
