# Project Name

The "reviews" module for the Udemy course page.

# Api

| endpoint | method | description |
| --- | --- | --- |
| /:courseId/reviews | GET | Get all reviews for a given course
| /:courseId/reviews | POST | Create a new review for a given course
| /:courseId/reviews | PUT | Update a review for a given course
| /:courseId/reviews | DELETE | Delete a review from a given course

## Related Projects

  - https://github.com/u-demo/header-sidebar-service
  - https://github.com/u-demo/students-also-bought-service
  - https://github.com/u-demo/instructors-service

## Usage
To run:
- run schema.sql to create SQL database (mysql -u [username] -p [password])
- npm run seed to seed database
- npm start to start server
- hosted on localhost:3001
- run npm run react to compile webapp 

### Installing Dependencies

From within the root directory:

npm install

