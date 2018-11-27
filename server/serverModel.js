const db = require('../database/index.js').client;

const calcCourseStats = (reviewData) => {
  console.log(reviewData, 'reviews')
  const sumRating = reviewData.reduce((sum, review) => (sum + Number(review.rating)), 0);
  const totalRatings = reviewData.length;
  const avgRating = Number((sumRating / totalRatings).toFixed(2));
  const summaryStats = reviewData.reduce((obj, review) => {
    let { rating } = review;
    rating = Math.floor(rating);
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

  if (featuredReview.user_id === undefined) { featuredReview = null; }
  featuredReview.rating = Number(featuredReview.rating);
  return featuredReview;
};

const removeFeaturedReviewFromList = (featuredReview, reviewData) => (
  reviewData.filter(review => (review.user_id !== featuredReview.user_id))
);


const getReviewData = (courseId, res) => {
  db.query(`SELECT * FROM reviews INNER JOIN users ON users.user_id = reviews.user_id WHERE course_id =${courseId};
  `)
    .then((data) => {
      const courseStats = calcCourseStats(data.rows);
      const featuredReview = findFeaturedReview(data.rows);
      const reviews = removeFeaturedReviewFromList(featuredReview, data.rows);
      res.send({ courseStats, featuredReview, reviews });
    });
};

module.exports = getReviewData;
