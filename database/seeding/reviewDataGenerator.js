const faker = require('faker');

const chooseRandomCourse = (previousCourses) => {
  const course = Math.ceil(Math.random() * 100);
  if (previousCourses.indexOf(course) === -1) {
    return course;
  }
  chooseRandomCourse(previousCourses);
};

const reviewDataGenerator = (userId, reviewCount) => {
  const reviewData = [];
  const previousCourses = [];
  for (let i = 0; i < reviewCount; i += 1) {
    const courseId = chooseRandomCourse(previousCourses);
    previousCourses.push(courseId);
    const rating = Math.ceil(Math.random() * 10) / 2;
    const review = faker.lorem.paragraph();
    const date = faker.date.past();
    const upvotes = Math.ceil(Math.random() * 100);
    const downvotes = Math.ceil(Math.random() * 20);
    const reported = Math.floor(Math.random() * 1.1);
    reviewData.push({
      userId,
      courseId,
      rating,
      review,
      date,
      upvotes,
      downvotes,
      reported,
    });
  }
  return reviewData;
};

module.exports = reviewDataGenerator;
