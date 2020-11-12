const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/authordb", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Connection to database established"))
    .catch(err => console.log("Yo shit broken", err));