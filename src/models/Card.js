const mongoose = require('mongoose');
const { Schema } = mongoose;

const CardSchema = new Schema({
    cardId: {
        type: Number,
        required: true,
        index: true
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
        type: Number,
        required: false
    },
    def: {
        type: Number,
        required: false
    },
    level: {
        type: Number,
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
    archetype: {
        type: String,
        required: false
    },
    card_images: {
        type: Array,
        required: false
    },
    misc_info: {
        type: Array,
        required: false
    },
    card_sets: {
        type: Array,
        required: false
    },
    set_code: {
        type: String,
        required: true,
        index: { unique: true }
    },
    set_rarity: {
        type: String,
        required: true
    },
    set_name: {
        type: String,
        required: true
    },
    set_rarity_code: {
        type: String,
        required: true
    }


});

const newCard = mongoose.model('Card', CardSchema);

module.exports = newCard
