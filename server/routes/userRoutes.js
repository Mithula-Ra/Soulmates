const express = require('express');
const userController = require('../controllers/userController');

const registerRouter = express.Router();

registerRouter.post('/login', userController.logIn);

module.exports = registerRouter;