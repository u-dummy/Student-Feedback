# Project Name

The "reviews" module for the Udemy course page.

## Related Projects


## Additional Routes

| Route/Endpoint                    | Description                            | Method  |
| -----------------------------     |---------------------------------------:| :------:|
| /:courseId/reviews/               | get all reviews for a specific course  | GET     |
| /:courseId/addReview/             | add a new review                       | POST    |
| /:courseId/updateReview/:reviewId | edit a review                          | PATCH   
| /:courseId/deleteReview/:reviewId | delete a review                        | DELETE  |

Stretch Goals:
| Route/Endpoint                | Description               | Method  |
| ----------------------------- |:-------------------------:| -------:|
| /userReview/:userId/reviews   | get a user's reviews      | GET     |


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

