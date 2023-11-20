const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/.env" });
const port = process.env.PORT || 5000;
const appRouter = require("./routes/toRouter");
const logMid = require("./loggermiddleware/loggermiddleware");

const app = express();
app.use(express.json());
app.use(logMid);
app.use("/posts", appRouter);

app.listen(port, () => {
  console.log(`server running on  port ${port}`);
});