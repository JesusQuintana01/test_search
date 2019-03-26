'use strict'
const Objectid = require('mongoose').ob
const Speciality = require('../../model/speciality');

/*This method get all provider from database*/
const getAll = async (req, res) => {
    try {

        const specialitys = await Speciality.find()
        res.status(200).send(specialitys)
    } catch (err) {
        res.status(500).send(err)
    }
}
const save = async (req, res) => {
    const speciality = new Speciality(req.body)
    try {
        const saved = await speciality.save()
        res.status(201).send({ saved })
    } catch (error) {
        res.status(500).send({ error })
    }
}

/*Exporting the methods*/
module.exports = {
    getAll,
    save
}