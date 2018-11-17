const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/').then(
  () => console.log('connected to mongo'),
  err => console.log(`error connecting to mongo: ${err}`),
);
