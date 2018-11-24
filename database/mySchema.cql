DROP KEYSPACE IF EXISTS udemy;
CREATE KEYSPACE IF NOT EXISTS udemy WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE udemy;

CREATE TYPE udemy.courses (
   course_id INT,
   name TEXT,
   created_at TIMESTAMP,
   updated_at TIMESTAMP
);



DROP TABLE IF EXISTS udemy.reviews;
CREATE TABLE IF NOT EXISTS udemy.reviews (
   review_id INT,
   course_id INT,
   rating FLOAT,
   review TEXT,
   date TEXT,
   upvotes INT,
   downvotes INT,
   reported INT,
   username TEXT,
   user_pic TEXT,
   course_count INT,
   review_count INT,
   created_at TIMESTAMP,
   updated_at TIMESTAMP,
   PRIMARY KEY (review_id, course_id)
)WITH CLUSTERING ORDER BY (created_at DESC);
COPY udemy.reviews (review_id, course_id, rating, review, date, upvotes, downvotes, reported, username, user_pic, course_count, review_count, created_at, updated_at) FROM '/Users/simonliu/Desktop/student-feedback/database/cqlReviews.csv' WITH DELIMITER=',' AND HEADER=TRUE;
CREATE INDEX course_index on udemy.reviews(course_id);