const db = require('./sequelizeSetup.js');
const courseData = require('./courseData.js');
const userDataGenerator = require('./userDataGenerator.js');
const reviewDataGenerator = require('./reviewDataGenerator.js');

const numOfUsers = 500;
const userData = userDataGenerator(numOfUsers);

db.sequelize.sync()
  .then(() => (db.Courses.bulkCreate(courseData)))
  .then(() => { console.log('----- Seeded Courses table!------'); })
  .catch((err) => { console.log('----- Error seeding Courses table: ', err, '-----'); })

  .then(() => (db.Users.bulkCreate(userData)))
  .then(() => { console.log('----- Seeded Users table!------'); })
  .catch((err) => { console.log('----- Error seeding Users table: ', err, '-----'); })

  .then(() => (db.Users.findAll({})))
  .then((data) => {
    const reviewData = [];
    const userTableData = data.map(row => (row.dataValues));
    userTableData.forEach((user) => {
      const userReviews = reviewDataGenerator(user.userId, user.reviewCount);
      reviewData.push(...userReviews);
    });
    return reviewData;
  })
  .then(reviewData => (db.Reviews.bulkCreate(reviewData)))
  .then(() => { console.log('----- Seeded Reviews table!------'); })
  .then(() => { process.exit(); })
  .catch((err) => { console.log('----- Error seeding Reviews table: ', err, '-----'); });
