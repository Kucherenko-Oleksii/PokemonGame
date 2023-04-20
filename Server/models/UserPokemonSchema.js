const mongoose = require('mongoose');

const userPokemonSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  pokemon_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Pokemon'
  },
  level: {
    type: Number,
    default: 1
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('UserPokemon', userPokemonSchema);
