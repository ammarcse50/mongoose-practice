const express = require("express");
const { default: mongoose } = require("mongoose");

const port = 5000;
const appointmentRoute = require("./routes/routeAppointMent.js")
const app = express();
app.use(express.json()); 

app.get("/", async (req, res) => {
  res.send("working server recure");
});

 app.use("/api/appointment", appointmentRoute)

const url = `mongodb+srv://safara:safara@cluster0.t9lecvs.mongodb.net/recure-API?retryWrites=true&w=majority&appName=Cluster0`;
mongoose
  .connect(url)
  .then(() => {
    // listen for request
    console.log("Successfully Connected to DB");
    app.listen(5000, () => {
      console.log(`running server ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
