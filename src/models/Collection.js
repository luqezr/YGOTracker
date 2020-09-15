const mongoose = require('mongoose');
const { Schema } = mongoose;

const CollectionSchema = new Schema({
  title: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  cards: [{
    type: Schema.Types.ObjectId,
    required: false
  }]
  ,
  date: {
    type: Date,
    default: Date.now
  }
});

const newCollection = mongoose.model('Collection', CollectionSchema);

module.exports = newCollection
