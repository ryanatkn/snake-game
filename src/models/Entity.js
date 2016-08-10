let _id = 0;

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
  width = 32;
  height = 32;
  color = 'transparent'; // same as css color

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
      default: throw new Error('Unknown direction ' + dir);
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
      if (!this.hasOwnProperty(prop) || prop === 'id') { continue; }
      const val = this[prop];
      if (typeof prop !== 'function') {
        e[prop] = val;
      }
    }
    return e;
  }
}

export function createTile(entity) {
  entity.color = '#f7f1f1';
  return entity;
}

export function createApple(entity) {
  entity.color = '#c89';
  return entity;
}

export function createSnakeSegment(entity) {
  entity.color = '#8c9';
  return entity;
}