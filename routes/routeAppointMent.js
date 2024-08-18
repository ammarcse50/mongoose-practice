const express = require('express');
const { saveAppointment } = require('../controllers/appointMentController');

const router = express.Router();

router.post("/saveAppointment",saveAppointment);


module.exports = router