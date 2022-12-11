const express = require("express");
const cors = require("cors");

const contactRouter = require("./routes/contacts");
const userRouter = require("./routes/users");

const checkAdminMiddleware = require("./middlewares/checkAdmin");
const logMiddleware = require("./middlewares/log");
const app = express();
const PORT = 3001;

// Middlewares
app.use(cors("*"));
app.use(express.json());
app.use(logMiddleware);

app.use("/api/v1/contacts", contactRouter);
app.use("/api/v1/users", userRouter);

app.get("/admin", checkAdminMiddleware, (req, res) => {
  res.send("Welcome to admin page");
});

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
