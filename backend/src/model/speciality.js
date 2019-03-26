/*Model of specialty*/
'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const specialty = Schema({
    name: String,
    createdBy: Number,
    createdAt: { type: Date, default: Date.now },
    updatedBy: Number,
    updatedAt: { type: Date, default: Date.now }
})
module.exports = mongoose.model('Specialty', specialty);