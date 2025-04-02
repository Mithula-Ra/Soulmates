const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const registerRoutes = require('./routes/userRoutes');
const gamesRoutes = require('./routes/gamesRoutes')
require('dotenv').config(); 

const app = express();

connectDB();

//middleware
app.use(cors()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', registerRoutes);
app.use('/games', gamesRoutes)


app.listen(process.env.PORT, ()=>{
    console.log('Listening on port', process.env.PORT);
});