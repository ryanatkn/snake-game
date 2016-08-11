let _id = 0;

export const ENTITY_DEFAULT_WIDTH = 32; // width in pixels of one entity (also assumed to be one tile)
export const ENTITY_DEFAULT_HEIGHT = 32; // height in pixels of one entity (also assumed to be one tile)

export default class Entity {
  constructor(x, y) {
    if (x) {
      this.x = x;
    }
    if (y) {
      this.y = y;
    }
    this.prevX = this.x;
    this.prevY = this.y;
  }

  id = _id++;
  x = 0;
  y = 0;
  prevX = 0;
  prevY = 0;
  width = ENTITY_DEFAULT_WIDTH;
  height = ENTITY_DEFAULT_HEIGHT;

  moveTo(x, y) {
    this.prevX = this.x;
    this.prevY = this.y;
    this.x = x;
    this.y = y;
  }

  moveBy(x, y) {
    this.moveTo(this.x + x, this.y + y);
  }

  moveDir(dir) {
    switch (dir) {
      case 'left': return this.moveBy(-1, 0);
      case 'right': return this.moveBy(1, 0);
      case 'up': return this.moveBy(0, -1);
      case 'down': return this.moveBy(0, 1);
      default: throw new Error('Unknown movement direction ' + dir);
    }
  }

  isOutOfBounds(mapHeight, mapWidth) {
    return this.x < 0 || this.y < 0 || this.x >= mapWidth || this.y >= mapHeight;
  }

  isCollidingWith(entity) {
    return this.isAt(entity.x, entity.y);
  }

  isAt(x, y) {
    return this.x === x && this.y === y;
  }

  // Quick hacky method to clone an entity with all of its data.
  clone() {
    const e = new Entity();
    for (const prop in this) {
      if (this.hasOwnProperty(prop) && prop !== 'id') {
        const val = this[prop];
        if (typeof val !== 'function') {
          e[prop] = val;
        }
      }
    }
    return e;
  }
}
