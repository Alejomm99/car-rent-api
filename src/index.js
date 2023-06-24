const express = require("express");
const dotenv = require("dotenv");
const statsRouter = require("./routes/stats.routes");
const usersRouter = require("./routes/users.routes");

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/", statsRouter);

//http://localhost:3000/users
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
