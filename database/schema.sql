DROP DATABASE IF NOT EXISTS udemy;
CREATE DATABASE udemy;

 \c udemy;

CREATE TABLE IF NOT EXISTS users (
user_id SERIAL PRIMARY KEY, 
username CHAR(50),
user_pic VARCHAR (50),
course_count INTEGER,
review_count INTEGER,
created_at DATE,
updated_at DATE
);

-- CREATE TABLE IF NOT EXISTS courses (
--   course_id SERIAL PRIMARY KEY,
--   name VARCHAR (200),
--   createdAt DATE,
--   updatedAt DATE
-- );

-- CREATE TABLE IF NOT EXISTS reviews (
--   review_id SERIAL PRIMARY KEY,
--   user_id INTEGER REFERENCES users(user_id),
--   course_id INTEGER REFERENCES courses(course_id),
--   rating INTEGER,
--   review VARCHAR (300),
--   date TIMESTAMP,
--   upvotes INTEGER,
--   downvotes INTEGER,
--   reported INTEGER,
--   createdAt DATE,
--   updatedAt DATE
-- );

\COPY users (username, user_pic, course_count, review_count) FROM '/Users/simonliu/Desktop/student-feedback/database/users.csv' WITH (FORMAT CSV)
