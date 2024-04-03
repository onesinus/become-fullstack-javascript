// src/db.js
const { MongoClient } = require('mongodb');

const MONGODB_URI = 'mongodb://localhost:27017'; // Change this to your MongoDB URI
const DATABASE_NAME = 'private_course_apps'; // Change this to your database name

let dbInstance;

async function connectToDatabase() {
  if (!dbInstance) {
    const client = await MongoClient.connect(MONGODB_URI);
    dbInstance = client.db(DATABASE_NAME);
    console.log('[OK] Connected to MongoDB');
  }

  return dbInstance;
}

module.exports = { connectToDatabase };
