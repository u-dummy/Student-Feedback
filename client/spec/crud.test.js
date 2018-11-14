const request = require('request');

test('valid response from get request', () => {
  request
    .get('http://localhost:3002/5/reviews')
    .on('response', (res) => {
      expect(res).toBeTruthy();
      expect(res.statusCode).toEqual(200);
    });
});

test('post request sends back 400 when invalid form data', () => {
  request
    .post('http://localhost:3002/5/reviews').form({})
    .on('response', (res) => {
      expect(res.statusCode).toEqual(400);
    });
});

test('post request adds an item to the db when correctly sent', () => {
  request
    .post('http://localhost:3002/1/reviews').form({ userId: 1, rating: 3, review: 'testing, I am a test!' })
    .on('response', (res) => {
      expect(res.statusCode).toEqual(200);
    });
});

test('DELETE request functions properly and sends back deleted item', () => {
  request
    .delete('http://localhost:3002/1/reviews').form({ reviewId: 15 })
    .on('response', (res) => {
      expect(res.statusCode).toEqual(200);
    });
});

test('UPDATE functions properly', () => {
  request
    .put('http://localhost:3002/1/reviews').form({ reviewId: 48, review: 'new review' })
    .on('response', (res) => {
      expect(res.statusCode).toEqual(200);
    });
});
