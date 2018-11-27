

function generateRandomId(userContext, events, done) {
  userContext.vars.courseId = Math.floor(Math.random() * 10000000) + 1;
  return done();
}

module.exports = {
  generateRandomId,
};
