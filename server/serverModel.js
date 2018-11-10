const db = require('../database/sequelizeSetup.js');

const flattenReviewData = (data) => {
  const reviewDataWithNestedUserObj = data.map(row => (row.dataValues));
  const reviewData = reviewDataWithNestedUserObj.map((row) => {
    row.user = row.user.dataValues;
    return row;
  });

  return reviewData;
};

const calcCourseStats = (reviewData) => {
  const sumRating = reviewData.reduce((sum, review) => (sum + review.rating), 0);
  const totalRatings = reviewData.length;
  const avgRating = (sumRating / totalRatings).toFixed(2);
  const summaryStats = reviewData.reduce((obj, review) => {
    const { rating } = review;
    obj[rating] += (1 / totalRatings) * 100;
    return obj;
  }, {
    avg: avgRating,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  return summaryStats;
};

// Review must have a +/- over 60 to be considered a featured review. If course has
// no reviews that high then it doesn't have a featured review
const findFeaturedReview = (reviewData) => {
  let featuredReview = reviewData.reduce((featured, review) => {
    const featuredPowerRanking = featured.upvotes - featured.downvotes;
    const currentReviewPowerRanking = review.upvotes - review.downvotes;
    if (currentReviewPowerRanking > featuredPowerRanking) { featured = review; }
    return featured;
  }, { upvotes: 60, downvotes: 0 });

  if (featuredReview.userId === undefined) { featuredReview = null; }

  return featuredReview;
};

const removeFeaturedReviewFromList = (featuredReview, reviewData) => (
  reviewData.filter(review => (review.userId !== featuredReview.userId))
);


const getReviewData = (courseId, res) => {
  db.Reviews.findAll({ where: { courseId }, include: [db.Users] })
    .then((data) => {
      const reviewData = flattenReviewData(data);
      const courseStats = calcCourseStats(reviewData);
      const featuredReview = findFeaturedReview(reviewData);
      const reviews = removeFeaturedReviewFromList(featuredReview, reviewData);
      res.send({ courseStats, featuredReview, reviews });
    });
};

module.exports = getReviewData;
