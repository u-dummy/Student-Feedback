const db = require('../database/sequelizeSetup.js');

Post.find({ where: { ...}, include: [User]})
const reviewsQuery = (courseId, res) => {
  db.Reviews.find({ where: { courseId } })
    .then((data) => {
      const reviewData = data.map(row => (row.dataValues));
      reviewData.forEach((review) => {

      })
    })
};

module.exports = reviewsQuery;