const Game = require('../models/gameModel');

const getAll = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);

  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getGameByID = async (req, res) => {
    try {
      const { id } = req.params; 
      
      const game = await Game.findOne({ id }); 
  
      if (!game) {
        return res.status(404).json({ error: 'Game not found' });
      }
  
      res.status(200).json(game);
    } catch (error) {
      console.error('Error fetching game:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  const createGame = async (req, res) => {
    try {
      const { name, img } = req.body;
      
  
      const customId = name.toLowerCase().split(" ").join("-");
  
      const newGame = new Game({
        id: customId,
        name,
        img
      });

      await newGame.save();
  
      res.status(201).json({ message: 'Game created successfully', game: newGame });
    } catch (error) {
      console.error('Error creating game:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
module.exports = { 
    getAll,
    getGameByID,
    createGame
 };
