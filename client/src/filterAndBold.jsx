import React from 'react';

const findMatchesAndBold = (query, review) => {
  let reviewStr = review;
  let queryStartingIndex = reviewStr.toUpperCase().indexOf(query.toUpperCase());
  const boldedReview = [];

  while (queryStartingIndex !== -1) {
    const queryEndingIndex = queryStartingIndex + query.length;
    boldedReview.push(
      reviewStr.slice(0, queryStartingIndex),
      <b>{reviewStr.slice(queryStartingIndex, queryEndingIndex)}</b>,
    );
    reviewStr = reviewStr.slice(queryEndingIndex);
    queryStartingIndex = reviewStr.toUpperCase().indexOf(query.toUpperCase());
  }

  if (reviewStr.length > 0) {
    boldedReview.push(reviewStr);
  }

  return boldedReview;
};

const filterAndBold = (reviews, query) => {
  const filteredReviews = reviews.filter(reviewObj => (
    reviewObj.review.toUpperCase().includes(query.toUpperCase())
  ));

  const filteredAndBoldedReviews = filteredReviews.map((reviewObj) => {
    const review = findMatchesAndBold(query, reviewObj.review);
    
    return {
      user: reviewObj.user,
      rating: reviewObj.rating,
      date: reviewObj.date,
      upvotes: reviewObj.upvotes,
      downvotes: reviewObj.downvotes,
      review,
    };
  });

  return filteredAndBoldedReviews;
};

export default filterAndBold;
