/*Making the routes of providerController functions*/
'use strict'

const express = require('express')
const provider_controller = require('./provider.controller');

const router = express.Router();

router.get('', provider_controller.getAll);
router.post('/add', provider_controller.save);
router.get('/:id', provider_controller.getById)
router.delete('/remove/:id', provider_controller.deleteOne);
router.patch('/update/:id', provider_controller.update);

module.exports = router;