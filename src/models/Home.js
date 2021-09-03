const mongoose = require('mongoose');

const HomeSchema = mongoose.Schema({
    drink: {
        type: String,
        required: true,
    },
    // price: {
    //     type: Number,
    //     required: true,
    // },
});

module.exports = mongoose.model('Drinks', HomeSchema);