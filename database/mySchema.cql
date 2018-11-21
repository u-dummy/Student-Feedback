DROP KEYSPACE IF EXISTS udemy;
CREATE KEYSPACE IF NOT EXISTS udemy WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE udemy;
DROP TABLE IF EXISTS udemy.courses;
CREATE TABLE udemy.courses (
   course_id INT PRIMARY KEY,
   name TEXT,
   course_pic TEXT,
   review_count INT,
   created_at TIMESTAMP,
   updated_at TIMESTAMP
);

DROP TABLE IF EXISTS udemy.users;
CREATE TABLE udemy.users(
   user_id INT PRIMARY KEY,
   username TEXT,
   user_pic TEXT,
   course_count INT,
   review_count INT,
   created_at TIMESTAMP,
   updated_at TIMESTAMP
   
);
DROP TABLE IF EXISTS udemy.reviews;
CREATE TABLE IF EXISTS udemy.reviews (
   review_id INT PRIMARY KEY,
   user_id INT,
   course_id INT,
   rating FLOAT,
   review TEXT,
   date TEXT,
   upvotes INT,
   downvotes INT,
   reported INT,
   users MAP,
   courses MAP,
   created_at TIMESTAMP,
   updated_at TIMESTAMP,
)

COPY udemy.homes (id, address, dateOfPosting, status, numberOfLikes, numberOfBathroom, numberOfBedroom, homeValue, sqft, cityName, stateName, zipCode, homeImage) FROM '/Users/kathrynhoesley/Desktop/nearby-homes/data.csv' WITH DELIMITER=',' AND HEADER=TRUE;