const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const movieRoute = require("./routes/movieRoutes");

require("dotenv").config();
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected mongodb"))
  .catch(() => console.log(Error));

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/movie", movieRoute);
module.exports = app;
