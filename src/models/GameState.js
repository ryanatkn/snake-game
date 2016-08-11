import random from 'lodash/random';
import {ENTITY_DEFAULT_WIDTH, ENTITY_DEFAULT_HEIGHT} from './Entity';

const MOVEMENT_COMMAND_QUEUE_SIZE = 4; // how many inputs a player can queue up at once

/**
 * The GameState is a class because an entity-component-system would be too much 
 * A lot of the logic is split out into `src/actions`
 */
export default class GameState {
  mapWidth = 16; // tile count x
  mapHeight = 16; // tile count y
  tickDuration = 200; // ms per tick
  tickTimer = 0; // current tick timer
  score = 0; // how many apples have been eaten
  tiles = []; // Entity[]
  apples = []; // Entity[]
  snake = {
    movementDirection: 'up', // same type as items in `input.movementCommands`
    segments: [], // Entity[]
  };
  input = {
    movementCommands: [], // queue of inputs, ('up'|'down'|'left'|'right')[]
  };

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

  /**
   * Registers a movement input command to be processed by the game as a queue.
   * Newer commands bump off older ones off the front.
   */
  inputMovementCommand(movementCommand) {
    this.input.movementCommands.push(movementCommand);
    while (this.input.movementCommands.length > MOVEMENT_COMMAND_QUEUE_SIZE) {
      this.input.movementCommands.shift();
    }
  }

  /**
   * Get the height of the map in pixels.
   * TODO is a good candidate for MobX computed properties.
   */
  get mapHeightPx() {
    return this.mapHeight * ENTITY_DEFAULT_HEIGHT;
  }

  /**
   * Get the width of the map in pixels.
   * TODO is a good candidate for MobX computed properties.
   */
  get mapWidthPx() {
    return this.mapWidth * ENTITY_DEFAULT_WIDTH;
  }
}
