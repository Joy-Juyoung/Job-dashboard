const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const jobRoutes = require("./routes/jobRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  }),
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

console.log("Render PORT:", process.env.PORT);
console.log("MONGO_URI exists:", Boolean(process.env.MONGO_URI));
console.log("JWT_SECRET exists:", Boolean(process.env.JWT_SECRET));
console.log("CLIENT_URL exists:", Boolean(process.env.CLIENT_URL));

if (process.env.MONGO_URI) {
  console.log("MONGO_URI prefix:", process.env.MONGO_URI.slice(0, 15));
}
