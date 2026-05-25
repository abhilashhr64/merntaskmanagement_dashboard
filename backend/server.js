const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", require("./routes/taskRoutes"));

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const mongoURI = process.env.MONGO_URI.replace(/"/g, "");

mongoose.connect(mongoURI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log("Connection Error:", err.message);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});