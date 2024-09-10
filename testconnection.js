// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();

// mongoose.connect(
//   process.env.MONGO_URL,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 30000, // 30 seconds
//     socketTimeoutMS: 60000, // 60 seconds
//   }
// )
// .then(() => console.log("Connected to MongoDB"))
// .catch((err) => console.error("Failed to connect to MongoDB", err));

const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

async function testConnection() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
    tlsInsecure: true, // Only for debugging, not recommended for production
  });

  try {
    await client.connect();
    console.log("Successfully connected to MongoDB Atlas!");
    await client.close();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

testConnection();

