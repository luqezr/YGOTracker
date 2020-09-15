const mongoose = require('mongoose');
const { Schema } = mongoose;

const DeckSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cards: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: String,
    required: true
  }
});

const NewDeck =  mongoose.model('Deck', DeckSchema);

module.exports = NewDeck;
