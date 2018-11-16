const rp = require('request-promise');
const faker = require('faker');
const fs = require('fs');
// const { Readable, WriteAble } = require('stream');
const path = require('path');
const moment = require('moment');

const userDataGen = () => {
  const userArr = [];
  for (let i = 0; i < 100; i += 1) {
    const userName = `${faker.name.firstName()}_${faker.name.lastName()}`;
    userArr.push(userName);
  }
  return userArr;
};

const reviewGen = (randomWordArray) => {
  const index1 = Math.floor(Math.random() * (randomWordArray.length - 15));
  const index2 = index1 + Math.floor(Math.random() * 14);
  const review = randomWordArray.slice(index1, index2).join(' ');
  return review;
};

const courseReviewDataGen = (randomWordArray, userArr, loopIndex) => {
  let reviewTxt = 'id,course,user,review,dateCreated';
  const cycle = 100000;
  let reviewCount = loopIndex * cycle;
  for (let i = 0; i < cycle; i += 1) {
    const word1 = randomWordArray[Math.floor(Math.random() * 140)];
    const word2 = randomWordArray[Math.floor(Math.random() * 140)];
    const word3 = randomWordArray[Math.floor(Math.random() * 140)];
    const courseName = `${word1} ${word2} ${word3}`;
    const avgReviewCount = Math.floor(Math.random() * 21);
    for (let j = 0; j < avgReviewCount; j += 1) {
      reviewCount += 1;
      const review = reviewGen(randomWordArray);
      const user = userArr[Math.floor(Math.random() * 100)];
      const dayOffset = Math.floor(Math.random() * 2 * j);
      const dateCreated = moment().subtract(dayOffset, 'days').format('M.D.YYYY');
      reviewTxt += `${reviewCount},${courseName},${user},${review},${dateCreated}`;
      reviewTxt += '\r\n';
    }
  }
  return reviewTxt;
};


const seed = () => {
  let randomWordArray = [];
  rp.get('http://hipsterjesus.com/api/')
    .then((res) => {
      const { text } = JSON.parse(res);
      randomWordArray = text.split(' ');
    }).then(() => {
      fs.writeFileSync((path.join(__dirname, 'reviews.csv')), '');
      for (let i = 0; i < 10; i += 1) {
        const userArr = userDataGen();
        const reviewTxt = courseReviewDataGen(randomWordArray, userArr, i);
        fs.appendFileSync(path.join(__dirname, 'reviews.csv'), reviewTxt);
        console.log('append');
      }
    });
};

seed();
