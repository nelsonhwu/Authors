const express = require('express')
const cors = require('cors')
const app = express();

require('./server/congfig/mongoose.config');
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/routes')(app);

app.listen(8000, () => console.log("Run yo shit on 8000"));