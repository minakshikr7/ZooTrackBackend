import { Zoo } from "../models/zoo.js";
import {contact} from "../models/contact.js"

export  const register = async(req,res)=>{
    const {name,email,password}= req.body;
    const user = await Zoo.findOne({email});
    

  if(user){
    return res.status(404).json({
      success:false,
      message:"User already exists"
    })
  } 
    try {
     
      const newUser = new Zoo({ name, email,password});
      await newUser.save();
      res.json({ success: true, user: newUser });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Registration failed' });
    }

}
export const login = async(req,res)=>{
  const {email,password}= req.body;
  console.log(password+email)
  try{
       const user = await Zoo.findOne({email});
       
       if(!user){
        return res.json({message:"register first"})
       }

       if(user.email===email && user.password===password){
        console.log(user + "hiii") 
        res.json({ success: true, user: user });
       }

  }catch(error){
    console.log(error)
  }
}

export const Contact = async(req,res)=>{
   try {
    const { name, email, subject, message } = req.body;

    const newContact = new contact({ name, email, subject, message });
    await newContact.save();

    res.status(200).json({ success: true, message: 'Message saved to database.' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
}
