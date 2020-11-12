const { Author } = require('../models/author');

module.exports ={
    //C
    newAuthor: (req, res) => {
        Author.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    //R
    allAuthors: (req, res) => {
        Author.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    getAuthor: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(author => res.json(author))
            .catch(err => res.json(author))
    },
    //U
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true })
            .then(updateAuthor => res.json(updateAuthor))
            .catch(err => res.json(err));
    },

    newQuote: (req, res) => {
        Author.updateOne({ _id: req.params.id }, { $addToSet: {quotes: req.body }}, { runValidators: true })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    //D
    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.json(err));
    },

    deleteQuote: (req, res) => {
        Author.updateOne({ 'quotes._id': req.params.quoteId }, { $pull: { quotes: {_id: req.params.quoteId }}})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
}