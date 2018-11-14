const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { getReviewData, addReview, removeReview, updateReview } = require('./serverModel.js');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/courses/:courseId', express.static(path.join(__dirname, '/../public/')));

app.get('/:courseId/reviews', (req, res) => {
  const { courseId } = req.params;
  getReviewData(courseId, res);
});

app.post('/:courseId/reviews', (req, res) => {
  const { courseId } = req.params;
  addReview(courseId, req.body, res);
});

app.delete('/:courseId/reviews', (req, res) => {
  const { reviewId } = req.body;
  removeReview(reviewId, res);
});

app.put('/:courseId/reviews', (req, res) => {
  const { reviewId, review } = req.body;
  updateReview(reviewId, review, res);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
