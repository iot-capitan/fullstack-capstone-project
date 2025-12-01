require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pinoLogger = require('./logger');

const connectToDatabase = require('./models/db');
const { loadData } = require("./util/import-mongo/index");

const app = express();
const port = process.env.PORT || 3060;

// Middleware
app.use(cors());
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Inside the server");
});

// Start server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
});
