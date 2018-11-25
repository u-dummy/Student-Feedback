const pg = require('pg');

const pool = new pg.Pool({
  user: 'jimmymartin',
  host: 'localhost',
  database: 'udemy',
  password: 'QETUO1177adgjl',
});

pool.query(`COPY users("username","userPic")
  FROM '/Users/jimmymartin/Desktop/HackReactor/sprints/sdc/student-feedback/sdc/db/users.csv'
  DELIMITER ','
  CSV HEADER`).then(() => {
  console.log('users copied');
  pool.query(`COPY courses("name")
    FROM '/Users/jimmymartin/Desktop/HackReactor/sprints/sdc/student-feedback/sdc/db/courses.csv'
    DELIMITER ','
    CSV HEADER`).then(() => {
    console.log('courses copied');
    pool.query(`COPY reviews("userId","courseId","rating","review","upvotes","downvotes","reported","date")
      FROM '/Users/jimmymartin/Desktop/HackReactor/sprints/sdc/student-feedback/sdc/db/reviews.csv'
      DELIMITER ','
      CSV HEADER `).then(() => {
      console.log('reviews copied');
    });
  });
});
