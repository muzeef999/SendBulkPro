import  express, { Request, Response }  from "express";
import dotenv from "dotenv"

dotenv.config();

const app = express();
const PORT = 4004;
app.use(express.json());

app.get("/api/sms", (req:Request, res:Response) => {
    res.send("SMS-service gateway running!")
})

app.listen(PORT, () => {
      console.log(`SMS-service running on port ${PORT}`);

})
