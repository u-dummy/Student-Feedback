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
        "userId" SERIAL PRIMARY KEY,
        "username" varchar(80) NOT NULL,
        "userPic" varchar,
        "courseCount" integer DEFAULT 0,
        "reviewCount" integer DEFAULT 0
    )`).then(() => {
      pool.query(`CREATE TABLE courses(
        "courseId" SERIAL PRIMARY KEY,
        "name" varchar NOT NULL
      )`).then(() => {
        pool.query(`CREATE TABLE reviews(
          "reviewId" SERIAL PRIMARY KEY,
          "userId" integer references users("userId"),
          "courseId" integer references courses("courseId"),
          "rating" integer,
          "review" varchar,
          "upvotes" integer DEFAULT 0,
          "downvotes" integer DEFAULT 0,
          "reported" boolean DEFAULT false,
          "date" date)`);
      }).then(() => console.log('built tables'));
    })
      .catch(e => console.log(e));
  });
