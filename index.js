const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

const PORT = process.env.PORT || 3000;

const uri = "mongodb://mongo:27017";

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to MongoDB");

    const db = client.db("test");
    const collection = db.collection("devices");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.get("/", (req, res) => {
  res.send("Hello, World! This is your Express app running in Docker!");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the API endpoint!" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
