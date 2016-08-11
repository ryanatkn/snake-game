# Snake game
A simple game of Snake made with Facebook's [Create React App](https://github.com/facebookincubator/create-react-app).
Uses React for rendering in a way that has terrible performance, re-rendering everything every animation frame.

See `src/index.js` for how things fit together.
The main game state `src/models/GameState` is mutated by the logic in `src/actions`.
This game system design is somewhere in between
traditional OO game objects and an [ECS](https://en.wikipedia.org/wiki/Entity_component_system) that
separates data and logic.
It's inconsistently and poorly designed,
or more favorably, it experiments with different design patterns.

[https://ryanatkn.github.io/snake-game](https://ryanatkn.github.io/snake-game)

Rewriting the game state and actions with
an [ECS](https://en.wikipedia.org/wiki/Entity_component_system) would
be interesting.


## Develop
See [create-react-app](https://github.com/facebookincubator/create-react-app) for more.

    npm install
    npm start


## Create React App
Fast, intuitive, helpful. Would use again!


## License
MIT