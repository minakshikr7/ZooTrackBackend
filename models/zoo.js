import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  
  },
  email: {
    type: String,
    required: true,  
  },
  password: {
    type: String,
    required: true,  
  }

});

// Export the model
export const Zoo = mongoose.model("Zoo", schema);
