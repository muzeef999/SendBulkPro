import  express, { Request, Response }  from "express";
import dotenv from "dotenv"

dotenv.config();

const app = express();
const PORT = 4005;
app.use(express.json());

app.get("/whatsapp", (req:Request, res:Response) => {
    res.send("Whatsapp-service gateway running!")
})

app.listen(PORT, () => {
      console.log(`Whatsapp-service running on port ${PORT}`);

})
