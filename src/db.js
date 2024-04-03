// src/db.js
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI; 
const DATABASE_NAME = process.env.DATABASE_NAME;  

let dbInstance;

async function connectToDatabase() {
  if (!dbInstance) {
    await mongoose.connect(`${MONGODB_URI}/${DATABASE_NAME}`, {});
    dbInstance = mongoose.connection;

    // Create a sample document to ensure the database is created
    // const SampleSchema = new mongoose.Schema({});
    // const SampleModel = mongoose.model('Sample', SampleSchema);
    // await SampleModel.create({}); // Creating a document triggers the database creation

    console.log('[OK] Connected to MongoDB');
  }

  return dbInstance;
}

module.exports = { connectToDatabase };
