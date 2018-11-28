const nr = require('newrelic');
let cluster = require('cluster');

if (cluster.isMaster) {
  let cpuCount = require('os').cpus().length;

  // Create a worker for each CPU
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }

// Code to run if we're in a worker process
} else {
  const express = require('express');
  const expressStaticGzip = require('express-static-gzip');
  const bodyParser = require('body-parser');
  const path = require('path');
  const getReviewData = require('./serverModel.js');
  const app = express();
  const PORT = 3002;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // app.use('/courses/:courseId', express.static(path.join(__dirname, '/../public/')));
  app.use('/courses/:courseId', expressStaticGzip(path.join(__dirname, '/../public/'), {
    enableBrotli: true,
    customCompressions: [{
      encodingName: 'deflate',
      fileExtension: 'zz',
    }],
    orderPreference: ['br'],
  }));

  app.get('/:courseId/reviews', (req, res) => {
    const { courseId } = req.params;
    console.log('hi');
    getReviewData(courseId, res);
  });


  // app.post('/:courseId/reviews', (req, res)=> {

  // });

  // app.patch('/:courseId/reviews', (req, res) => {

  // });

  // app.delete('/:courseId/reviews', (req, res)=> {

  // });

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}
