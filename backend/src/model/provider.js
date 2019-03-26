/*Model of provider*/
'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const provider = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    middleName: String,
    email: { type: String, required: true, unique: true },
    specialty: {
        type: Schema.ObjectId,
        Ref: 'Specialty'
    },
    projectedStartDate: String,
    employerId: { type: Number, required: true },
    providerType: String,
    staffStatus: String,
    status: { type: String, required: true },
    createdBy: Number,
    createdAt: { type: Date, default: Date.now },
    updatedBy: Number,
    updatedAt: { type: Date, default: Date.now }
})
module.exports = mongoose.model('Provider', provider);