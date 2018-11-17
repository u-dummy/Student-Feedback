const pg = require('pg');

const pool = new pg.Pool({
  user: 'jimmymartin',
  host: 'localhost',
  database: 'udemy',
  password: 'QETUO1177adgjl',
});

pool.query('DROP TABLE IF EXISTS reviews')
  .then(() => {
    console.log('reviews dropped');
    pool.query(`CREATE TABLE reviews(
      id SERIAL PRIMARY KEY,
      username varchar(40) NOT NULL,
      course varchar (80) NOT NULL,
      review varchar DEFAULT 'great class!',
      upvotes integer DEFAULT 0,
      downvotes integer DEFAULT 0,
      reported boolean DEFAULT false,
      date date)`)
      .then(() => console.log('built reviews'))
      .catch(e => console.log(e));
  });
