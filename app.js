import express from "express";
import cors from "cors"
import { connectDB } from "./data/database.js";
import cookieParser from "cookie-parser";
import router from "./routes/zooR.js";



const app = express();
app.use(cookieParser())
connectDB();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://zootrackbackend.onrender.com",
  "https://zoo-track-frontend.vercel.app",
  "https://zoo-track-frontend-35vz7d82p-minakshikr7s-projects.vercel.app" // ✅ Add this line
];


app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman) or from allowed list
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true
}));

 

app.use(router)
app.get("/",(req,res)=>{
    res.send("working")
})

app.listen(5000,()=>{
    console.log("server is working at port 5000")
})