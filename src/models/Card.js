const mongoose = require('mongoose');
const { Schema } = mongoose;

const CardSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    fname: {
        type: String,
        required: false
    },
    desc: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    atk: {
        type: String,
        required: false
    },
    def: {
        type: String,
        required: false
    },
    level: {
        type: String,
        required: false
    },
    race: {
        type: String,
        required: false
    },
    attribute: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    },
    linkmarker: {
        type: String,
        required: false
    },
    linkvale: {
        type: String,
        required: false
    },
    scale: {
        type: String,
        required: false
    },
    set: {
        type: String,
        required: false
    },
    archetype: {
        type: String,
        required: false
    },



});

const newCard = mongoose.model('Card', CollectionSchema);

module.exports = newCard
