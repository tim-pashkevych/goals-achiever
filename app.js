import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

const { DB_HOST, PORT = 3000 } = process.env;
const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((error, _, res, __) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({ message });
});

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection established");
    });
  })
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
