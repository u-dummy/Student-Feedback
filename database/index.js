const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'simon',
  port: 5432,
});

client.connect();

console.log("hi");

// module.exports = {
//   query: (text, params, callback) => pool.query(text, params, callback),
// };
module.exports = client;
