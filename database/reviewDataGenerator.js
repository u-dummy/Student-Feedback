const faker = require('faker');
const csvWriter = require('csv-write-stream');
const fs = require('fs');


const chooseRandomCourse = () => Math.ceil(Math.random() * 10000000);

const reviewDataGenerator = (reviewCount, id) => {
  const previousCourses = [];
  let data = '';
  for (let i = 0; i < reviewCount; i += 1) {
    const courseId = id;
    previousCourses.push(chooseRandomCourse());
    const review = faker.lorem.sentences(2);
    const date = faker.date.past().toTimeString();
    const upvotes = Math.ceil(Math.random() * 100);
    const downvotes = Math.ceil(Math.random() * 20);
    const reported = Math.floor(Math.random() * 1.1);
    const fakeDistribution = Math.random() * 100;
    let rating;
    if (fakeDistribution >= 60) {
      rating = 5;
    } else if (fakeDistribution >= 50) {
      rating = 4.5;
    } else if (fakeDistribution >= 40) {
      rating = 4;
    } else if (fakeDistribution >= 25) {
      rating = 3.5;
    } else if (fakeDistribution >= 20) {
      rating = 3;
    } else if (fakeDistribution >= 15) {
      rating = 2.5;
    } else if (fakeDistribution >= 10) {
      rating = 2;
    } else if (fakeDistribution >= 5) {
      rating = 1.5;
    } else {
      rating = 1;
    }
    const reviewData = `${Math.ceil(Math.random() * 1000)},${courseId},${rating},${review},${date},${upvotes},${downvotes},${reported}\n`;
    data += reviewData;
  }
  return data;
};


const stream = fs.createWriteStream('reviews.csv');
function writeTenMillionTimes(writer) {
  let j = 10000000;
  function write() {
    let ok = true;
    do {
      j--;
      if (j === 0) {
        // last time!
        writer.write(reviewDataGenerator(5, j));
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(reviewDataGenerator(5, j));
        console.log(j);
      }
    } while (j > 0 && ok);
    if (j > 0) {
      // had to stop early!
      // write some more once it drains
      console.log('needs to be drained');
      writer.once('drain', write);
    }
  }
  write();
}
writeTenMillionTimes(stream);