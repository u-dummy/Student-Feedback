const faker = require('faker');

const userDataGenerator = (userCount) => {
  const userData = [];
  for (let i = 1; i <= userCount; i += 1) {
    const gender = Math.floor(Math.random() * 2);
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.lastName();
    const courseCount = Math.ceil(Math.random() * 30);
    const reviewCount = Math.ceil(Math.random() * courseCount);
    const picNum = Math.ceil(Math.random() * 99);
    const picGender = (gender === 0) ? 'men' : 'women';
    let userPic;
    Math.random() > 0.8 ? userPic = `https://randomuser.me/api/portraits/${picGender}/${picNum}.jpg` : userPic = firstName[0]+lastName[0];
    userData.push({
      username: `${firstName} ${lastName}`,
      userPic,
      gender,
      courseCount,
      reviewCount,
    });
  }
  return userData;
};

module.exports = userDataGenerator;
