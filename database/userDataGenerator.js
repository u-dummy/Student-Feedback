const faker = require('faker');
const csvWriter = require('csv-write-stream');
const fs = require('fs');


const userDataGenerator = (userCount) => {
  const writer = csvWriter({ headers: ['username', 'userpic', 'coursecount', 'reviewcount'],newline:'\n' });
  writer.pipe(fs.createWriteStream('users.csv'));
  for (let i = 1; i <= userCount; i += 1) {
    const gender = Math.floor(Math.random() * 2);
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.lastName();
    const courseCount = Math.ceil(Math.random() * 30);
    const reviewCount = Math.ceil(Math.random() * courseCount);
    const picNum = Math.ceil(Math.random() * 99);
    const picGender = (gender === 0) ? 'men' : 'women';
    let userPic;
    // eslint-disable-next-line no-unused-expressions
    Math.random() > 0.2 ? userPic = `https://randomuser.me/api/portraits/${picGender}/${picNum}.jpg` : userPic = firstName[0] + lastName[0];
    // eslint-disable-next-line no-shadow
    writer.write([`${firstName} ${lastName}`, userPic, courseCount, reviewCount]);
  }
  writer.end();
};
userDataGenerator(1000);
// module.exports = userDataGenerator;
