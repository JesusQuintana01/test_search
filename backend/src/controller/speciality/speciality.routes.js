/*Making the routes of providerController functions*/
'use strict'

const express = require('express')
const speciality_controller = require('./speciality.controller');

const router = express.Router();

router.get('', speciality_controller.getAll);
router.post('/add', speciality_controller.save);

module.exports = router;