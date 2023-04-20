const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const { PokemonSchema } = require('./models/PokemonSchema.js');


const app = express();
const port = process.env.PORT || 4000;

mongoose.connect('mongodb+srv://Oleksii:alex2023@cluster0.bbo9qtt.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to DataBase :)'));

app.listen(port, () => console.log(`Server listening on port ${port}`));

// Пагінація:

// Endpoint списку покемонів
router.get('/api/pokemons', async (req, res) => {
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

module.exports = router;
