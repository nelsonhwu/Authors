const AuthorController = require('../controllers/controller');
const { Author } = require('../models/author');

module.exports = app => {
    //C
    app.post('/api/authors', AuthorController.newAuthor);
    //R
    app.get('/api/authors', AuthorController.allAuthors);
    app.get('/api/authors/:id', AuthorController.getAuthor);
    //U
    app.patch('/api/authors/:id', AuthorController.updateAuthor);
    app.patch('/api/authors/:id/quote', AuthorController.newQuote);
    app.patch('/api/quotes/:quoteId', AuthorController.deleteQuote);
    //D
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
    // app.delete('/api/quotes/:id', AuthorController.deleteQuote);
}