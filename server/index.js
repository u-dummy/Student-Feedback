const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const getReviewData = require('./serverModel.js');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));


app.get('/courses/:courseId/reviews', (req, res) => {
  const { courseId } = req.params;
  getReviewData(courseId, res);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
