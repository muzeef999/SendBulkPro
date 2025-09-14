import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 4002;
app.use(express.json());

app.get("/api/mail", (req: Request, res: Response) => {
  res.send("Mail Service is running!");
});

app.listen(PORT, () => {
  console.log(`Mail Service running on port ${PORT}`);
});
