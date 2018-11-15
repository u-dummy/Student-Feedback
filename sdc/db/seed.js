const rp = require('request-promise');
const faker = require('faker');
const fs = require('fs');
const path = require('path');

(() => {
  let users = '';
  let courses = '';
  let reviews = '';
  let randomWordArray = [];
  rp.get('http://hipsterjesus.com/api/')
    .then((res) => {
      const { text } = JSON.parse(res);
      randomWordArray = text.split(' ');
    }).then(() => {
      for (let i = 0; i < 1000; i += 1) {
        users += i.toString().concat(',');
        users += faker.name.firstName().concat('_', faker.name.lastName(), ',');
        users += 'https://picsum.photos/150/?random';
        users += '\r\n';
      }
      for (let i = 0; i < 100000; i += 1) {
        const word1 = randomWordArray[Math.floor(Math.random() * 140)];
        const word2 = randomWordArray[Math.floor(Math.random() * 140)];
        const word3 = randomWordArray[Math.floor(Math.random() * 140)];
        courses += i.toString().concat(',');
        courses += `${word1} ${word2} ${word3}`;
        courses += '\r\n';
      }
      fs.writeFile(path.join(__dirname, 'users.csv'), users, (err) => {
        if (err) {
          console.log('error writing to users.csv file: ', err);
        }
      });
      fs.writeFile(path.join(__dirname, 'courses.csv'), courses, (err) => {
        if (err) {
          console.log('error writing to courses.csv file: ', err);
        }
      });
    });
})();
