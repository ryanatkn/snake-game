# Snake game

A simple game of snake written for a job interview.
See `src/index.jss` for how things fit together.
Build off of Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app). 
Uses React for rendering in a way that has terrible performance, re-rendering everything every animation frame.
The main game state `src/models/GameState` is mutated by the logic in `src/actions`.
This game system design is somewhere in between traditional OO game objects and an ECS system that separates data and logic.

[https://ryanatkn.github.io/snake-game](https://ryanatkn.github.io/snake-game)