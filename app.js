import express from "express";
import cors from "cors"
import { connectDB } from "./data/database.js";
import cookieParser from "cookie-parser";
import router from "./routes/zooR.js";



const app = express();
app.use(cookieParser())
connectDB();
app.use(express.json());
 app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))

 

app.use(router)
app.get("/",(req,res)=>{
    res.send("working")
})

app.listen(5000,()=>{
    console.log("server is working at port 5000")
})