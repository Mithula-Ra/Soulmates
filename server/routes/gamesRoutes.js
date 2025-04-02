const express = require('express');
const gamesController = require('../controllers/gamesController');

const gamesRouter = express.Router();

gamesRouter.post('/newgame', gamesController.createGame);
gamesRouter.get('/all', gamesController.getAll);
gamesRouter.get('/:id', gamesController.getGameByID);


module.exports = gamesRouter;