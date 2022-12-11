const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

let users = [
  {
    id: "1",
    username: "cr7",
    password: "cr7123",
    email: "cr7@mu.com",
  },
  {
    id: "2",
    username: "messi",
    password: "messi123",
    email: "messi@paris.com",
  },
  {
    id: "3",
    username: "admin",
    password: "admin123",
    email: "admin@gmail.com",
  },
];

router.get("/", (req, res) => {
  const usersExceptingPassword = users.map((user) => {
    const { password, ...restUser } = user;
    // delete user.password;
    return restUser;
  });

  res.json({
    data: usersExceptingPassword,
    msg: "Successfully",
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.json({
      msg: "User is not exist",
      data: {},
    });
  }

  res.json({
    data: user,
    msg: "Successfully",
  });
});

router.post("/", (req, res) => {
  const { username, password, email } = req.body;

  // Validation
  if (!username || !password || !email) {
    return res.json({
      msg: "Missing required keys",
      statusCode: 400,
    });
  }

  // Record exist in DB
  const isExist = users.findIndex((user) => user.email === email);
  if (isExist !== -1) {
    return res.json({
      msg: "Can not upload user with this email",
      statusCode: 400,
    });
  }

  // Create new user
  const newUser = {
    ...req.body,
    id: uuidv4(),
  };
  users.push(newUser);

  res.status(201).json({
    msg: "Add new contact successfully",
    data: users,
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { username, password, email } = req.body;

  // Check is id exist
  const userIdx = users.findIndex((user) => user.id === id);
  if (userIdx === -1) {
    return res.json({
      msg: "Can not find this resource",
      statusCode: 400,
    });
  }

  // Validation
  if (!username || !password || !email) {
    return res.json({
      msg: "Missing required keys",
      statusCode: 400,
    });
  }

  users[userIdx] = {
    id,
    username,
    password,
    email,
  };

  res.json({
    data: users,
    msg: "Successfully",
  });
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  // check is id exist
  const userIdx = users.findIndex((user) => user.id === id);
  if (userIdx === -1) {
    return res.json({ msg: "Can not find this resource", statusCode: 400 });
  }

  const deletedUsers = users.filter((user) => user.id !== id);
  users = deletedUsers;

  res.json({
    msg: "Delete successfully",
    data: users,
  });
});

module.exports = router;
