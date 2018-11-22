const rp = require('request-promise');
const faker = require('faker');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

const userDataGen = () => {
  const userArr = [];
  let users = '';
  for (let i = 0; i < 1000; i += 1) {
    const userName = `${faker.name.firstName()}_${faker.name.lastName()}`;
    userArr.push(userName);
    users += `${userName},https://picsum.photos/200/?random`;
    users += '\r\n';
  }
  return { users, userArr };
};

const courseGen = (randomWordArray) => {
  let courses = '';
  const courseArr = [];
  for (let i = 0; i < 1000; i += 1) {
    const word1 = randomWordArray[Math.floor(Math.random() * 140)];
    const word2 = randomWordArray[Math.floor(Math.random() * 140)];
    const word3 = randomWordArray[Math.floor(Math.random() * 140)];
    const coursename = `${word1} ${word2} ${word3}`;
    courses += `${coursename}`;
    courses += '\r\n';
  }
  return { courses, courseArr };
};

const reviewGen = (randomWordArray, index) => {
  const index1 = Math.floor(Math.random() * (randomWordArray.length - 15));
  const index2 = index1 + Math.floor(Math.random() * 14);
  const review = randomWordArray.slice(index1, index2).join(' ');
  const upvotes = Math.floor(Math.random() * 100);
  const downvotes = 100 - upvotes;
  const reported = (downvotes > 85);
  const dayOffset = Math.ceil(Math.random() * 2 * index);
  const dateCreated = moment().subtract(dayOffset, 'days').format('YYYY-MM-DD');
  return {
    review,
    upvotes,
    downvotes,
    reported,
    dateCreated,
  };
};

const dataGen = (randomWordArray, userArr, courseArr, streamIndex) => {
  const cycle = 1000;
  let reviews = '';
  for (let i = 0; i < cycle; i += 1) {
    const avgReviewCount = Math.floor(Math.random() * 21);
    for (let j = 0; j < avgReviewCount; j += 1) {
      const { review, upvotes, downvotes, reported, dateCreated } = reviewGen(randomWordArray, j);
      const userid = Math.ceil(Math.random() * 1000);
      const courseid = Math.ceil(Math.random() * cycle) + (streamIndex * cycle);
      reviews += `${userid},${courseid},${review},${upvotes},${downvotes},${reported},${dateCreated}`;
      reviews += '\r\n';
    }
  }
  return reviews;
};

const seed = () => {
  let randomWordArray = [];
  rp.get('http://hipsterjesus.com/api/')
    .then((res) => {
      const { text } = JSON.parse(res);
      randomWordArray = text.split(' ');
    }).then(() => {
      fs.writeFileSync((path.join(__dirname, 'users.csv')), '');
      fs.appendFileSync((path.join(__dirname, 'users.csv')), 'username,photo\r\n');
      const { users, userArr } = userDataGen();
      fs.appendFileSync(path.join(__dirname, 'users.csv'), users);
      return userArr;
    }).then((userArr) => {
      fs.writeFileSync((path.join(__dirname, 'courses.csv')), '');
      fs.appendFileSync((path.join(__dirname, 'courses.csv')), 'coursename\r\n');
      fs.writeFileSync((path.join(__dirname, 'reviews.csv')), '');
      fs.appendFileSync((path.join(__dirname, 'reviews.csv')), 'userid,courseid,review,upvotes,downvotes,reported,dateCreated\r\n');
      for (let i = 0; i < 1000; i += 1) {
        const { courses, courseArr } = courseGen(randomWordArray);
        const reviews = dataGen(randomWordArray, userArr, courseArr, i);
        fs.appendFileSync(path.join(__dirname, 'courses.csv'), courses);
        fs.appendFileSync(path.join(__dirname, 'reviews.csv'), reviews);
        console.log(i);
      }
    });
};

seed();
