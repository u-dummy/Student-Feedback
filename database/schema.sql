CREATE DATABASE udemy;

USE udemy;

CREATE TABLE users (
userId INTEGER (9) NOT NULL AUTO_INCREMENT, 
username CHAR(50),
userPic VARCHAR (50),
courseCount INTEGER (5),
reviewCount INTEGER (5),
createdAt DATE,
updatedAt DATE,
PRIMARY KEY (userId)
);

CREATE TABLE courses (
  courseId INTEGER (8) NOT NULL AUTO_INCREMENT,
  name VARCHAR (100),
  createdAt DATE,
  updatedAt DATE,
  PRIMARY KEY (courseId)
);

CREATE TABLE reviews (
  reviewId INTEGER (10) NOT NULL AUTO_INCREMENT,
  userId INTEGER (9),
  courseId INTEGER (8),
  rating INTEGER (2),
  review VARCHAR (600),
  date TIMESTAMP,
  upvotes INTEGER (5),
  downvotes INTEGER (5),
  reported INTEGER (1),
  createdAt DATE,
  updatedAt DATE,
  PRIMARY KEY (reviewId),
  FOREIGN KEY (userId)
    REFERENCES users (userId),
  FOREIGN KEY (courseId)
    REFERENCES courses (courseId)
);
