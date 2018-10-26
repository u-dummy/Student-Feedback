const db = require('../database/sequelizeSetup.js');

// Post.find({ where: { ...}, include: [User]})
const reviewsQuery = (courseId, res) => {
  db.Reviews.findAll({ where: { courseId }, include: [db.Users] })
    .then((data) => {
      const reviewDataWithUserObj = data.map(row => (row.dataValues));
      const reviewData = reviewDataWithUserObj.map(row => ({
        reviewId: row.reviewId,
        courseId: row.courseId,
        rating: row.rating,
        review: row.review,
        date: row.date,
        upvotes: row.upvotes,
        downvotes: row.downvotes,
        reported: row.reported,
        users: row.user.dataValues,
        createdAt: row.createdAt,
        updatedAt: row.updatedAt,
      }));
    })
    .then((data) => {
      res.json(data);
    });
};

module.exports = reviewsQuery;

// { reviewId: 4256,
//   userId: 496,
//   courseId: 99,
//   rating: 3,
//   review: 'Aut omnis quia ipsa in in. Velit quia cupiditate vitae quas voluptates alias quo odio quo. Numquam tempora dolorum ad beatae voluptatem saepe qui est. Ipsa sed non nisi omnis perspiciatis.',
//   date: 2017-10-27T19:28:22.000Z,
//   upvotes: 10,
//   downvotes: 16,
//   reported: 0,
//   createdAt: '2018-10-26',
//   updatedAt: '2018-10-26' }
