import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 4001;

app.use(express.json());


app.get("/api/auth", (req: Request, res: Response) => {
  res.send("Auth Service is running!");
});

app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});