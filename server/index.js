const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const reviewsQuery = require('./reviewDataQuery.js');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));


app.get('/reviews/:courseId', (req, res) => {
  const courseId = req.params.courseId;
  reviewsQuery(courseId, res);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
