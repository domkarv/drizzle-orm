import express from "express";
import { db } from "./db/index.js";

const app = express();

app.get("/", async (req, res) => {
  const data = await db.query.todo.findMany();
  return res.json(data);
});

app.listen(3000, () => {
  console.log("🚀 Server is up on port 3000!");
});
