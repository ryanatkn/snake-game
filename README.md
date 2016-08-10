# Snake game

A simple game of Snake written for a job interview.
Built with Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app).
Uses React for rendering in a way that has terrible performance, re-rendering everything every animation frame.

See `src/index.js` for how things fit together.
The main game state `src/models/GameState` is mutated by the logic in `src/actions`.
This game system design is somewhere in between
traditional OO game objects and an ECS system that separates data and logic,
and is not recommended for real use.

[https://ryanatkn.github.io/snake-game](https://ryanatkn.github.io/snake-game)

## Develop
See [create-react-app](https://github.com/facebookincubator/create-react-app) for more.

    npm install
    npm start

## License
MIT