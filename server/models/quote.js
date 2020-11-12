const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "Please provide the quote."],
        minlength: [2, "Quote must be at least 2 characters."],
    },
    vote: {
        type: Number,
        default: 0,
    },
})

module.exports = {
    QuoteSchema
}