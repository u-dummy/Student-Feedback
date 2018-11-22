const pg = require('pg');

const pool = new pg.Pool({
  user: 'jimmymartin',
  host: 'localhost',
  database: 'udemy',
  password: 'QETUO1177adgjl',
});

pool.query('DROP TABLE IF EXISTS reviews, users, courses')
  .then(() => {
    console.log('tables dropped');
    pool.query(`CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        name varchar(80) NOT NULL,
        photo varchar
    )`).then(() => {
      pool.query(`CREATE TABLE courses(
        id SERIAL PRIMARY KEY,
        name varchar NOT NULL
      )`).then(() => {
        pool.query(`CREATE TABLE reviews(
          id SERIAL PRIMARY KEY,
          userid integer references users(id),
          courseid integer references courses(id),
          review varchar DEFAULT 'great class!',
          upvotes integer DEFAULT 0,
          downvotes integer DEFAULT 0,
          reported boolean DEFAULT false,
          date date)`);
      }).then(() => console.log('built tables'));
    })
      .catch(e => console.log(e));
  });
