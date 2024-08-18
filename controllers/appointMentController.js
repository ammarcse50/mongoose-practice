const appointment = require("../models/appointMentModel");

exports.getAllAppointment = async (req, res) => {
  try {
    const newAppointment = await appointment.find({});
    res.status(201).json({
      message: "Appointment fetched successfully",
      appointment: newAppointment
    });
  } catch (error) {
    console.error("fetching Error:", error.errors);
    res
      .status(500)
      .json({ message: "Error getting appointment", error: error.message });
  }
};

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
    res.status(201).json({
      message: "Appointment saved successfully",
      appointment: newAppointment,
    });
  } catch (error) {
    console.error("Validation Error:", error.errors);
    res
      .status(500)
      .json({ message: "Error saving appointment", error: error.message });
  }
};
