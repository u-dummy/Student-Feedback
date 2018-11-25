const Sequelize = require('sequelize');
const DbConfig = require('./db.config.js');

// const sequelize = new Sequelize('udemy', 'root', null, { dialect: 'mysql' });
const sequelize = new Sequelize(DbConfig.databaseName, DbConfig.username, DbConfig.password, {
  dialect: DbConfig.dialect,
  host: DbConfig.hostName,
  port: 5432,
  logging: console.log,
  define: {
    timestamps: false,
  },
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
  rating: Sequelize.DECIMAL(10, 1),
  review: Sequelize.STRING(600),
  date: Sequelize.DATE,
  upvotes: Sequelize.INTEGER,
  downvotes: Sequelize.INTEGER,
  reported: Sequelize.INTEGER,
});

Users.hasMany(Reviews, {
  foreignKey: 'userId'
});
Reviews.belongsTo(Users, {
  foreignKey: 'userId'
});
Courses.hasMany(Reviews, {
  foreignKey: 'courseId'
});
Reviews.belongsTo(Courses, {
  foreignKey: 'courseId'
});

module.exports = {
  Users,
  Courses,
  Reviews,
  sequelize,
};
