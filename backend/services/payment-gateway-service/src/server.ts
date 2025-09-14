import express, { Request, Response } from "express";
import dotenv from "dotenv";


dotenv.config();

const app = express();
const PORT = 4003;
app.use(express.json());


app.get("/api/payment", (req:Request, res:Response) => {
    res.send("Payment Gateway is running!")
});


app.listen(PORT, ()=> {
   console.log(`Payment gateway running on port ${PORT}`);
})