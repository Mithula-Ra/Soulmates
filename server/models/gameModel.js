const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  num: {
    type: Number,
    default: 0 
  },
  img: {
    type: String,
    required: true
  },
  done: {
    type: Number,
    default: 0
  }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
