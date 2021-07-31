require('dotenv').config()

const express = require('express')
const cors = require("cors");

const db = require("./models");

const dbConfig = require('./config/db.config');

const app = express()
const port = 3030

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
// app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

app.get('/', function (req, res) {
  res.json({ api: 'json' })
})

require('./routes/auth.route')(app);
require('./routes/user.route')(app);
require('./routes/book.route')(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
