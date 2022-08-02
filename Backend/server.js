// Import libraries
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// reading flag from input
const {parseCliFlagValue} = require('./parse-cli');
const environment = parseCliFlagValue('env');

// choosing .env file for different environment according to startup flag
require('dotenv').config({path: `./.env.${environment}`}); 

// Express
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// setting up mongoose
const uri = process.env.DB_URI;
mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => console.log('Connection to database successful'))
  .catch((error) => console.log(`Failed to connect to database. Error: ${error}`));

// declaring routes
const homeRouter = require('./routes/home.route');
const drinkerRouter = require('./routes/drinker.route');
const baristaRouter = require('./routes/barista.route');

// Calling different routers for different routes
app.use('/', homeRouter);
app.use('/drinker', drinkerRouter);
app.use('/barista', baristaRouter);

// a non-existing path
app.use('*', (req, res) => res.status(404).json({error: "There is no such page. Have a coffee ☕ and try again."}))

app.listen(port, () => {
  console.log(`Server started, listening to port: ${port}`)
})