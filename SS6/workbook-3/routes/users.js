const express = require("express");
const userRouter = express.Router();
const logRequest = require("../middlewares/logRequest");
const requireAPIKey = require("../middlewares/requireAPIKey");

let users = [
  { username: "alice", apiKey: "alice@123" },
  { username: "bob", apiKey: "bob@123" },
  { username: "charlie", apiKey: "charlie@123" },
];

// Middleware
userRouter.use(logRequest);

// GET all users
userRouter.get("/", (req, res) => {
  const usersExceptingAPIKey = users.map((user) => {
    const { apiKey, ...restUser } = user;

    return restUser;
  });
  res.json({
    data: usersExceptingAPIKey,
    msg: "Successfully",
  });
});

// GET a users
userRouter.get("/:name", (req, res) => {
  const { name } = req.params;
  const user = users.find((user) => user.username === name);

  if (!user) {
    return res.json({
      msg: "User is not exist",
      data: [],
    });
  }

  res.json({
    data: user,
    msg: "Successfully",
  });
});

// Create new user
userRouter.post("/", (req, res) => {
  const { username, apiKey } = req.body;

  // Validation
  if (!username || !apiKey) {
    return res.json({
      msg: "Missing required keys",
      statusCode: 400,
    });
  }

  // Is this user exist?
  const isExist = users.findIndex((user) => user.username === username);
  if (isExist !== -1) {
    return res.json({
      msg: "Can not upload user with this username",
      statusCode: 400,
    });
  }

  const newUser = {
    ...req.body,
  };

  users.push(newUser);

  res.status(201).json({
    msg: "Add new user successfully",
    data: users,
  });
});

// Update a user
userRouter.put("/:name", (req, res) => {
  const { name } = req.params;
  const { username, apiKey } = req.body;

  // Check is username is exist
  const checkUserName = users.findIndex((user) => user.username === name);

  if (checkUserName === -1) {
    return res.json({
      msg: "Can not find this resource",
      statusCode: 400,
    });
  }

  // Validation
  if (!username || !apiKey) {
    return res.json({
      msg: "Missing required keys",
      statusCode: 400,
    });
  }

  users[checkUserName] = {
    username,
    apiKey,
  };

  res.json({
    data: users,
    msg: "Successfully",
  });
});

// Delete a user
userRouter.delete("/:name", (req, res) => {
  const { name } = req.params;

  // Check is username is exist
  const checkUserName = users.findIndex((user) => user.username === name);
  if (checkUserName === -1) {
    return res.json({
      msg: "Can not find this resource",
      statusCode: 400,
    });
  }

  const deleteUsers = users.filter((user) => user.username !== name);
  users = deleteUsers;

  res.json({
    msg: "Delete successfully",
    data: users,
  });
});

// Student resource
userRouter.get("/:name/student", (req, res) => {
  const apiKey = req.query.api_key;
  const userApi = users.find((user) => user.apiKey === apiKey);

  requireAPIKey(userApi);

  res.json({
    msg: "Student resource",
  });
});

// Teacher resource
userRouter.get("/:name/teacher", (req, res) => {
  const apiKey = req.query.api_key;
  const userApi = users.find((user) => user.apiKey === apiKey);

  requireAPIKey(userApi);

  res.json({
    msg: "Teacher resource",
  });
});

// Student resource
userRouter.get("/:name/subject", (req, res) => {
  const apiKey = req.query.api_key;
  const userApi = users.find((user) => user.apiKey === apiKey);

  requireAPIKey(userApi);

  res.json({
    msg: "Subject resource",
  });
});

module.exports = userRouter;
