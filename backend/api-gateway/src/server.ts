import express, { Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import axios from "axios";

dotenv.config();
const app = express();
const PORT = 4000;

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

// Microservice endpoints
const AUTH_SERVICE = "http://localhost:4001";
const MAIL_SERVICE = "http://localhost:4002";
const PAYMENT_GATEWAY_SERVICE = "http://localhost:4003";
const SMS_SERVICE = "http://localhost:4004";
const WHATSAPP_SERVICE = "http://localhost:4005";

// Root
app.get("/", (req: Request, res: Response) => {
  res.send("API Gateway running 🚀");
});

// Auth
app.get("/auth", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${AUTH_SERVICE}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Auth service unavailable" });
  }
});

// Mail
app.get("/mail", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${MAIL_SERVICE}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Mail service unavailable" });
  }
});

// Payment
app.get("/payment", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${PAYMENT_GATEWAY_SERVICE}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Payment gateway service unavailable" });
  }
});

// SMS
app.get("/sms", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${SMS_SERVICE}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "SMS service unavailable" });
  }
});

// WhatsApp
app.get("/whatsapp", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${WHATSAPP_SERVICE}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "WhatsApp service unavailable" });
  }
});

app.listen(PORT, () => console.log(`Gateway on http://localhost:${PORT}`));
