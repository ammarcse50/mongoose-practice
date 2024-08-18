const express = require('express');
const { saveAppointment, getAllAppointment } = require('../controllers/appointMentController');

const router = express.Router();

router.post("/saveAppointment",saveAppointment);
router.get("/getAllAppointment",getAllAppointment);


module.exports = router