// import express
const express = require('express');
// create instance of express
const mongoose = require('mongoose');
const keys = require('./config/keys');
const users = require('./routes/api/users');
const passport = require('passport');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const app = express();

//Passport config
app.use(passport.initialize());
require('./config/passport')(passport)


//Body-parser config
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Db configuration
const db = keys.mongoURI;
mongoose
  .connect(db)
  //Promise statement
  .then(() => console.log('Mongodb connected'))
  .catch(err => console.log(err))

// first route
// Callback calling the function to get sent back
app.get('/', (req, res) => res.send('Hello World'));
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// Listens for the port number on localhost
// All callbacks are arrow functions
const port = 9000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


