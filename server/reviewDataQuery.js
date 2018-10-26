const db = require('../database/sequelizeSetup.js');

// Post.find({ where: { ...}, include: [User]})
const reviewsQuery = (courseId, res) => {
  db.Reviews.findAll({ where: { courseId }, include: [db.Users] })
    .then((data) => {
      const reviewDataWithNestedUserObj = data.map(row => (row.dataValues));
      const reviewData = reviewDataWithNestedUserObj.map((row) => {
        row.user = row.user.dataValues;
        return row;
      });
      return reviewData;
    })
    .then((reviewData) => {
      const sumRating = reviewData.reduce((sum, review) => (sum + review.rating), 0);
      const avgRating = (sumRating / reviewData.length).toFixed(2);
      const summaryStats = reviewData.reduce((obj, review) => {
        const { rating } = review;
        obj[rating] === undefined ? obj[rating] = 1 : obj[rating] += 1;
        return obj;
      }, { avg: avgRating });

      // Review must have a +/- over 60 to be considered a featured reviews. If course has
      // no reviews that high then it doesn't have a featured review
      const findFeaturedReview = (reviewData) => {
        let featuredReview = reviewData.reduce((featured, review) => {
          const featuredPowerRanking = featured.upvotes - featured.downvotes;
          const currentReviewPowerRanking = review.upvotes - review.downvotes;
          if (currentReviewPowerRanking > featuredPowerRanking) {
            featured = review;
          }
          return featured;
        }, { upvotes: 60, downvotes: 0});
        
        if (featuredReview.userId === undefined) {
          featuredReview = null;
        }
        return featuredReview;
      };
      const featuredReview = findFeaturedReview(reviewData);

      const removeFeaturedReview = (featuredReview1, reviewData1) => {
        const reviews = reviewData1.filter(review => (review.userId !== featuredReview1.userId));
        return reviews;
      };

      const reviews = removeFeaturedReview(featuredReview, reviewData);
      const reviewDataObj = { summaryStats, featuredReview, reviews };
      res.send(reviewDataObj);
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
