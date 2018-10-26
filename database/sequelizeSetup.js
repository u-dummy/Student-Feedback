const Sequelize = require('sequelize');

const sequelize = new Sequelize('udemy', 'root', null, {
  dialect: 'mysql',
});

const Users = sequelize.define('users', {
  userId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: Sequelize.STRING,
  userPic: Sequelize.STRING,
  courseCount: Sequelize.INTEGER,
  reviewCount: Sequelize.INTEGER,
});

const Courses = sequelize.define('courses', {
  courseId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,
});

const Reviews = sequelize.define('reviews', {
  reviewId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: Sequelize.INTEGER,
  courseId: Sequelize.INTEGER,
  rating: Sequelize.INTEGER,
  review: Sequelize.STRING,
  date: Sequelize.DATE,
  upvotes: Sequelize.INTEGER,
  downvotes: Sequelize.INTEGER,
  reported: Sequelize.INTEGER,
});

db.Users.hasMany(db.Reviews, {foreignKey: 'userId'});
db.Reviews.belongsTo(db.Users, {foreignKey: 'userId'});

module.exports = { Users, Courses, Reviews };
