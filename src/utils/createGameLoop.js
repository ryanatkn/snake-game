/**
 * Goes into an infinite update/render loop. Returns a function to cancel it.
 * A more advanced version could take 2 params, update and render, to better suit certain use cases.
 */
export default function createGameLoop(update) {
  requestAnimationFrame(onFrame);

  let lastTime = 0;
  let running = true;

  function onFrame(time) {
    if (!running) {
      return;
    }
    if (lastTime !== 0) {
      update(time - lastTime);
    }
    lastTime = time;
    requestAnimationFrame(onFrame);
  }

  return function cancelGameLoop() {
    running = false;
  };
}
