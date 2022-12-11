const express = require("express");
const userRouter = require("./routes/users");

const app = express();
const PORT = 3001;

app.use(express.json());


app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
