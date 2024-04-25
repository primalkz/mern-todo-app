const createServer = require("./server");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = createServer();

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/hi", (req, res) => {
  res.status(200).send("Hello World");
});

//const MONGO_URI = process.env.MONGO_URI;
const MONGO_URI = "mongodb://localhost:27017/db"
const PORT = process.env.PORT || 5000;

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
