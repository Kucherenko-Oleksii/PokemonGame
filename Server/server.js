const express = require('express');
const mongoose = require('mongoose');

const { PokemonSchema } = require('./models/PokemonSchema.js');


const app = express();
app.use(express.json());

const port = process.env.PORT || 4000;

mongoose.connect('mongodb+srv://Oleksii:alex2023@cluster0.bbo9qtt.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to DataBase :)'));


// Пагінація:

app.get("/", async (req, res) => {
  return res.json({ message: "Hello, World ✌️" });
});

// Endpoint списку покемонів
app.get('/api/pokemons', async (req, res) => {
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

const fs = require('fs');

app.get('/api/pokemons/mock', (req, res) => {
  fs.readFile('./pokemons.json', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server error');
      return;
    }
    const pokemons = JSON.parse(data);
    res.send(pokemons);
  });
});

const start = async () => {
  try {
    app.listen(4000, () => console.log("Server started on port 4000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

