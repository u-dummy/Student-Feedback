DROP DATABASE IF NOT EXISTS udemy;
CREATE DATABASE udemy;

 \c udemy;


CREATE TABLE IF NOT EXISTS courses (
  course_id SERIAL PRIMARY KEY,
  name VARCHAR (200),
  created_at TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
user_id SERIAL PRIMARY KEY, 
username CHAR(50),
user_pic VARCHAR (50),
course_count INTEGER,
review_count INTEGER,
created_at TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS reviews (
  review_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  course_id INTEGER REFERENCES courses(course_id),
  rating NUMERIC(2,1),
  review VARCHAR (300),
  date VARCHAR (25),
  upvotes INTEGER,
  downvotes INTEGER,
  reported INTEGER,
  created_at TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP
);

\COPY courses (course_id, name) FROM '/Users/simonliu/Desktop/student-feedback/database/courseData.csv' WITH (FORMAT CSV)
\COPY users (username, user_pic, course_count, review_count) FROM '/Users/simonliu/Desktop/student-feedback/database/users.csv' WITH (FORMAT CSV)
\COPY reviews (user_id, course_id, rating, review, date, upvotes, downvotes, reported) FROM '/Users/simonliu/Desktop/student-feedback/database/reviews.csv' WITH (FORMAT CSV)
CREATE INDEX id ON users USING HASH (user_id);
CREATE INDEX c_id ON courses USING HASH(course_id);
CREATE INDEX _id ON reviews USING HASH(course_id);
CREATE INDEX u_id ON reviews USING HASH(user_id);


SELECT * FROM reviews INNER JOIN users ON users.user_id = reviews.user_id WHERE reviews.course_id = 10;
