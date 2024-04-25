const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
require('dotenv').config();
const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const tasksRoutes = require("./routes/tasks");
const authRoutes = require("./routes/auth");
const verifyToken = require("./routes/validate-token");

app.use("/api/user", authRoutes);
app.use("/api/tasks", verifyToken, tasksRoutes);
app.use("/api/verify", verifyToken);

const MONGO_URI = process.env.MONGO_URI;
//const MONGO_URI = "mongodb://localhost:27017/db";
const PORT = process.env.PORT || 3001;
//const PORT = 27017;
mongoose
  .set("strictQuery", false)
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on Port: http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(`${error} did not connect`));

module.exports = app;
