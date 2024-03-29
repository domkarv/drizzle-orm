import express from "express";
import { db } from "./db/index.js";

const app = express();

app.get("/", async (req, res) => {
  const todo = await db.query.todo.findMany();
  const user = await db.query.user.findMany();
  return res.json({ todo, user });
});

app.listen(3000, () => {
  console.log("🚀 Server is up on port 3000!");
});
