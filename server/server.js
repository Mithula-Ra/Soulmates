const express = require('express');
const cors = require('cors');
const testRouter = require('./routes/testRoutes');
require('dotenv').config(); 




const app = express();
app.use(cors());

//middleware
app.use(express.json());

app.use('/', testRouter);

app.listen(process.env.PORT, ()=>{
    console.log('Listening on port', process.env.PORT);
});