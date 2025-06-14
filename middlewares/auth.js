// import {  } from "../models/user.js"
import  jwt  from "jsonwebtoken"
import { Zoo } from "../models/zoo.js"


export const isAuthenticatedd = async(req,res,next)=>{
    const {token} = req.cookies
    console.log(token+"tokeeeen")

    if(!token){
      return res.status(404).json({
        success:false,
        message:"Login first"
      })
    }
    
    const decoded = jwt.verify(token,"tdsfadsfasfadsfasdfa")// token ko decode kr ke id access kr lenge
    req.user = await Zoo.findById(decoded._id)

    next();
}