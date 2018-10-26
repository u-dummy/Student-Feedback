const db = require('../database/sequelizeSetup.js');

const calcCourseStats = (reviewData) => {
  const sumRating = reviewData.reduce((sum, review) => (sum + review.rating), 0);
  const avgRating = (sumRating / reviewData.length).toFixed(2);
  const summaryStats = reviewData.reduce((obj, review) => {
    const { rating } = review;
    obj[rating] === undefined ? obj[rating] = 1 : obj[rating] += 1;
    return obj;
  }, { avg: avgRating });

  return summaryStats;
};

// Review must have a +/- over 60 to be considered a featured reviews. If course has
// no reviews that high then it doesn't have a featured review
const findFeaturedReview = (reviewData) => {
  let featuredReview = reviewData.reduce((featured, review) => {
    const featuredPowerRanking = featured.upvotes - featured.downvotes;
    const currentReviewPowerRanking = review.upvotes - review.downvotes;
    if (currentReviewPowerRanking > featuredPowerRanking) { featured = review; }
    return featured;
  }, { upvotes: 60, downvotes: 0});

  if (featuredReview.userId === undefined) { featuredReview = null; }

  return featuredReview;
};

const removeFeaturedReviewFromList = (featuredReview, reviewData) => (
  reviewData.filter(review => (review.userId !== featuredReview.userId))
);


const getReviewData = (courseId, res) => {
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
      const courseStats = calcCourseStats(reviewData);
      const featuredReview = findFeaturedReview(reviewData);
      const reviews = removeFeaturedReviewFromList(featuredReview, reviewData);
      const reviewDataObj = { courseStats, featuredReview, reviews };
      res.send(reviewDataObj);
    });
};

module.exports = getReviewData;
