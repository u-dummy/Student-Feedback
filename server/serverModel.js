const db = require('../database/sequelizeSetup.js');

const flattenReviewData = (data) => {
  const reviewDataWithNestedUserObj = data.map(row => (row.dataValues));
  const reviewData = reviewDataWithNestedUserObj.map((row) => {
    row.user = row.user.dataValues;
    row.rating = Number(row.rating);
    return row;
  });
  return reviewData;
};

const calcCourseStats = (reviewData) => {
  const sumRating = reviewData.reduce((sum, review) => (sum + review.rating), 0);
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

  if (featuredReview.userId === undefined) { featuredReview = null; }

  return featuredReview;
};

const removeFeaturedReviewFromList = (featuredReview, reviewData) => {
  if (!featuredReview) {
    return reviewData;
  }
  return reviewData.filter(review => (review.userId !== featuredReview.userId));
};


const getReviewData = (courseId, res) => {
  db.Reviews.findAll({ where: { courseId }, include: [db.Users] })
    .then((data) => {
      const reviewData = flattenReviewData(data);
      const courseStats = calcCourseStats(reviewData);
      const featuredReview = findFeaturedReview(reviewData);
      const reviews = removeFeaturedReviewFromList(featuredReview, reviewData);
      res.status(200).send({ courseStats, featuredReview, reviews });
    });
};

const addReview = (courseId, reviewInfo, res) => {
  const { userId, rating, review } = reviewInfo;
  console.log(isNaN(rating));
  if (isNaN(userId) || !review || !courseId || isNaN(rating)) {
    res.status(400).end();
  }
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const date = `${year}-${month}-${day}`;
  db.Reviews.create({
    userId,
    review,
    rating,
    courseId,
    date,
  })
    .then(() => {
      console.log('success');
      res.status(200).end();
    })
    .catch((err) => {
      console.log('err');
      res.json(err);
    });
};

const removeReview = (reviewId, res) => {
  if (reviewId === undefined) {
    res.status(400).end();
  }
  db.Reviews.destroy({
    where: { reviewId },
  }).then(affectedReview => res.status(200).json(affectedReview));
};

const updateReview = (reviewId, review, res) => {
  if (reviewId === undefined) {
    res.status(400).end();
  }
  db.Reviews.update({ review }, { where: { reviewId } })
    .then(() => res.status(200).end());
};

module.exports = {
  getReviewData,
  addReview,
  removeReview,
  updateReview,
};
