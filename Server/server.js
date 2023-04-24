const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PokemonSchema = require('./models/PokemonSchema.js');


const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

mongoose.connect('mongodb+srv://Oleksii:alex2023@cluster0.bbo9qtt.mongodb.net/pokemonsdb', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to DataBase :)'));

app.get("/", cors(), async (req, res) => {
  return res.json({ message: "Hello, World ✌️" });
});

// Endpoint списку покемонів
app.get('/api/pokemons', cors(), async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skipIndex = (page - 1) * limit;

    const pokemons = await PokemonSchema.find().skip(skipIndex).limit(limit);
    res.json(pokemons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
module.exports = app;
