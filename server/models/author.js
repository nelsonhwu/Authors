const mongoose = require('mongoose')
const { QuoteSchema } = require('./quote')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name of the author is required."],
        minlength: [2, "Author name must be at least 2 characters"],
    },
    quotes: [QuoteSchema]
}, { timestamps: true });

module.exports.Author = mongoose.model("Author", AuthorSchema);