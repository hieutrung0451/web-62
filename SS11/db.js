const { MongoClient } = require("mongodb");

const db = {};

async function connectToDB() {
  const client = new MongoClient(
    "mongodb+srv://admin:admin@web62.wzzdfmk.mongodb.net/test"
  );
  await client.connect();
  console.log("Connected successfully to server");
  const database = client.db("restaurants");
  db.restaurants = database.collection("restaurants");
}

module.exports = { connectToDB, db };
