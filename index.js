const express = require("express");
const { default: mongoose } = require("mongoose");
const appointment = require("./model");
const port = 5000;

const app = express();
app.use(express.json());
app.get("/", async (req, res) => {
  res.send("working server recure");
});

app.post("/appoint", async (req, res) => {
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
});
const url = `mongodb+srv://safara:safara@cluster0.t9lecvs.mongodb.net/recure-API?retryWrites=true&w=majority&appName=Cluster0`;
mongoose
  .connect(url)
  .then(() => {
    // listen for request
    console.log("Successfully Connected to DB");
    app.listen(5000, () => {
      console.log("running server");
    });
  })
  .catch((error) => {
    console.log(error);
  });
