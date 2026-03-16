import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import configDB from "./src/db/db.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

await configDB();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
