const { Client } = require('pg');

const seeds = require('./seed.js');

const client = new Client({
  user: 'postgres',
  database: 'udemy',
  port: 5432
});

client.connect()


  
