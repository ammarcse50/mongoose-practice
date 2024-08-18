const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  firstname: {
    type: String,
   
  },
  lastname: {
    type: String,
 
  },
  email: {
    type: String,
    required: true,
  
  },
  phone: {
    type: Number,

  },
  nic: {
    type: Number,
   
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  gender: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,

  },
  birthtime: {
    type: String, // Use String for time if stored as "10:30 AM" or similar format

  },
  department: {
    type: String,
 
  },
  doctor: {
    type: String,
   
  },
  address: {
    type: String,
   
  },
 


},{ timestamps: true });

const appointment = mongoose.model("appointmentCollection", appointmentSchema);

module.exports = appointment;
