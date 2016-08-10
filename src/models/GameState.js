import random from 'lodash/random';

/**
 * The GameState is a class because an entity-component-system would be too much 
 * A lot of the logic is split out into `src/actions`
 */
export default class GameState {
  mapWidth = 16;
  mapHeight = 16;
  turnDuration = 500;
  turnTimer = 0;
  score = 0;
  tiles = []; // Entity[]
  apples = []; // Entity[]
  snake = {
    segments: [], // Entity[]
  };
  inputDir = 'up'; // ['up', 'down', 'left', 'right']

  /**
  * Finds the first entity at the given location. Ignores tile entities.
  * This would be more generic if the game handled entities generically,
  * but because of the small scope of this project I chose to a more explicit,
  * less flexible data structure.
  */
  findEntityAt(x, y) {
    for (const a of this.apples) {
      if (a.isAt(x, y)) {
        return a;
      }
    }
    for (const s of this.snake.segments) {
      if (s.isAt(x, y)) {
        return s;
      }
    }
  }

  /**
  * Returns {x, y} for a random empty tile on the game map.
  */
  getRandomEmptyLocation() {
    let location;
    while (!location || this.findEntityAt(location.x, location.y)) {
      location = this.getRandomLocation();
    }
    return location;
  }

  /**
  * Gets a random location on the game map.
  */
  getRandomLocation() {
    return {
      x: random(this.mapWidth - 1),
      y: random(this.mapHeight - 1),
    }
  }
}
