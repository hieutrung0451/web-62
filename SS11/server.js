const express = require("express");
const { connectToDB, db } = require("./db");

const app = express();
const port = 3000;
const restaurantRouter = express.Router();

app.use("/restaurants", restaurantRouter);

app.listen(port, () => {
  connectToDB();
});

// Cau 1
restaurantRouter.get("/cau1", async (req, res) => {
  const restaurants = await db.restaurants.find({}).toArray();
  res.json(restaurants);
});

// Cau 2
restaurantRouter.get("/cau2", async (req, res) => {
  const restaurants = await db.restaurants
    .find({
      "address.zipcode": "11209",
    })
    .toArray();
  res.json(restaurants);
});

// Cau 3
restaurantRouter.get("/cau3", async (req, res) => {
  const restaurants = await db.restaurants
    .find({ cuisine: "American " })
    .toArray();
  res.json(restaurants);
});

// Cau 4
restaurantRouter.get("/cau4", async (req, res) => {
  const restaurants = await db.restaurants
    .find({ borough: "Brooklyn" })
    .toArray();
  res.json(restaurants);
});

// Cau 5
restaurantRouter.get("/cau5", async (req, res) => {
  const restaurants = await db.restaurants
    .find({ borough: "Manhattan" })
    .toArray();
  res.json(restaurants);
});

// Cau 6
restaurantRouter.get("/cau6", async (req, res) => {
  const restaurants = await db.restaurants
    .find({ borough: "Manhattan", cuisine: "Chicken" })
    .toArray();
  res.json(restaurants);
});

// Cau 7
restaurantRouter.get("/cau7", async (req, res) => {
  const restaurants = await db.restaurants
    .find({
      "address.street": "Wall Street",
    })
    .toArray();
  res.json(restaurants);
});

// Cau 8
restaurantRouter.get("/cau8", async (req, res) => {
  const restaurants = await db.restaurants
    .find({
      grades: { $gte: { $size: 2 } },
    })
    .toArray();
  res.json(restaurants);
});

// Cau 9
restaurantRouter.get("/cau9", async (req, res) => {
  const restaurants = await db.restaurants
    .find({
      "grades.grade": "B",
    })
    .toArray();
  res.json(restaurants);
});

// Cau 10
restaurantRouter.get("/cau10", async (req, res) => {
  const restaurants = await db.restaurants
    .find({ grades: { $elemMatch: { score: { $gt: 100 } } } })
    .toArray();
  res.json(restaurants);
});
