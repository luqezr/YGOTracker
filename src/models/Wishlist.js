const mongoose = require('mongoose');
const { Schema } = mongoose;

const WishlistSchema = new Schema({
  title: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  cards: {
    type: Array,
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

const newWishlist = mongoose.model('Wishlist', WishlistSchema);

module.exports = newWishlist
