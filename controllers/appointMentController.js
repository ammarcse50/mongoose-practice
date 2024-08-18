const appointment = require("../models/appointMentModel");

exports.saveAppointment = async (req, res) => {
    const {
      firstname,
      lastname,
      email,
      phone,
      nic,
      date,
      gender,
      birthday,
      birthtime,
      department,
      doctor,
      address,
    } = req.body;
  
    try {
      const newAppointment = await appointment.create({
        firstname,
        lastname,
        email,
        phone,
        nic,
        date,
        gender,
        birthday,
        birthtime,
        department,
        doctor,
        address,
      });
  
      console.log(newAppointment);
      res
        .status(201)
        .json({
          message: "Appointment saved successfully",
          appointment: newAppointment,
        });
    } catch (error) {
      console.error("Validation Error:", error.errors);
      res
        .status(500)
        .json({ message: "Error saving appointment", error: error.message });
    }
  }

