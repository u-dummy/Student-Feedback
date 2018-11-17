const pg = require('pg');

const pool = new pg.Pool({
  user: 'jimmymartin',
  host: 'localhost',
  database: 'udemy',
  password: 'QETUO1177adgjl',
});

pool.query(`COPY reviews(username,course,review,upvotes,downvotes,reported,date)
  FROM '/Users/jimmymartin/Desktop/HackReactor/sprints/sdc/student-feedback/sdc/db/reviews.csv'
  DELIMITER ','
  CSV HEADER `)
  .then(() => console.log('coppied over!'))
  .catch(e => console.log(`error copying into reviews: ${e}`));
