const faker = require('faker');

const generateId = (userContext, events, done) => {
  // generate random data
  const id = Math.round(Math.random() * 100000);
  // add to virtual users variable context
  userContext.vars.id = id;
  // execute
  done();
};

module.exports = {
  generateId,
};
