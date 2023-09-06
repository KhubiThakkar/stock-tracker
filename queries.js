require('dotenv').config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 5432, // default PostgreSQL port
  database: process.env.DATABASE,
  ssl: {
    rejectUnauthorized: false, // Use only for development/testing purposes
  },
});

pool.connect((err, client, release) => {
  console.log('---------------blaashhabdhwabcjds -------------');
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Successfully connected to the database");
});

module.exports = pool;