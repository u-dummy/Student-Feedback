const faker = require('faker');

const userDataGenerator = (userCount) => {
  const userData = [];
  for (let i = 1; i <= userCount; i += 1) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const courseCount = Math.ceil(Math.random() * 30);
    const reviewCount = Math.ceil(Math.random() * courseCount);
    const picNum = Math.ceil(Math.random() * 1084);
    let userPic;
    Math.random() > 0.8 ? userPic = `https://picsum.photos/200/300?image=${picNum}` : userPic = firstName[0]+lastName[0];
    userData.push({
      username: `${firstName} ${lastName}`,
      userPic,
      courseCount,
      reviewCount,
    });
  }
  return userData;
};

module.exports = userDataGenerator;
