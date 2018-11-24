const faker = require('faker');
const csvWriter = require('csv-write-stream');
const fs = require('fs');
const moment = require('moment');

const chooseRandomCourse = () => Math.ceil(Math.random() * 2500000);

const reviewDataGenerator = (reviewCount, id) => {
  const previousCourses = [];
  let data = '';
  for (let i = 0; i < reviewCount; i += 1) {
    const courseId = chooseRandomCourse;
    const gender = Math.floor(Math.random() * 2);
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.lastName();
    const courseCount = Math.ceil(Math.random() * 30);
    const reviewsCount = Math.ceil(Math.random() * courseCount);
    const picNum = Math.ceil(Math.random() * 99);
    const picGender = (gender === 0) ? 'men' : 'women';
    let userPic;

    Math.random() > 0.2 ? userPic = `https://randomuser.me/api/portraits/${picGender}/${picNum}.jpg` : userPic = firstName[0] + lastName[0];
    previousCourses.push(chooseRandomCourse());
    const review = faker.lorem.sentences(2);
    const date = faker.date.past().toTimeString();
    const upvotes = Math.ceil(Math.random() * 100);
    const downvotes = Math.ceil(Math.random() * 20);
    const reported = Math.floor(Math.random() * 1.1);
    const fakeDistribution = Math.random() * 100;
    const time = new Date();
    let timestamp = moment(time).format('YYYY-MM-DD HH:mm');


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
    const reviewData = `${id},${courseId},${rating},${review},${date},${upvotes},${downvotes},${reported},${lastName} ${firstName},${userPic},${courseCount},${reviewsCount},${timestamp},${timestamp}\n`;
    data += reviewData;
  }
  return data;
};


const stream = fs.createWriteStream('cqlReviews.csv');
function writeTenMillionTimes(writer) {
  let j = 0;
  function write() {
    let ok = true;
    do {
      j++;
      if (j === 10000) {
        // last time!
        writer.write(reviewDataGenerator(5, j));
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(reviewDataGenerator(5, j));
        console.log(j);
      }
    } while (j < 10000 && ok);
    if (j < 10000) {
      // had to stop early!
      // write some more once it drains
      console.log('needs to be drained');
      writer.once('drain', write);
    }
  }
  write();
}
writeTenMillionTimes(stream);
