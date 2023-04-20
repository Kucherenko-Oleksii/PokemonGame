const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
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

module.exports = mongoose.model('Pokemon', pokemonSchema);
