'use strict'
const Provider = require('../../model/provider');
const Speciality = require('../../model/speciality')

/*This method save a provider*/
const save = async (req, res) => {
    try {
        const provider = new Provider(req.body)
        const saved = await provider.save();
        res.status(201).send({ saved })
    } catch (error) {
        res.status(500).send({ error })
    }
}

const getById = async (req, res) => {
    try {
        const { id } = req.params
        const provider = await Provider.findById(id)
        if (!provider) return res.status(404).send()
        res.status(200).send(provider)

    } catch (error) {
        res.status(500).send(error)
    }
}

/*This method get all provider from database*/
const getAll = async (req, res) => {
    try {
        const list = await Provider.find()
        res.status(200).send({ list })
    } catch (error) {
        res.status(500).send({ error })
    }
}

/*This method use a _id from the items of database to delete it*/
const deleteOne = async (req, res) => {
    const { id } = req.params
    try {
        const response = await Provider.findByIdAndDelete(id)
        res.status(200).send({ response })

    } catch (error) {
        res.status(500).send({ error })
    }
}

/*This method use a _id from the items of database to update it*/
const update = async (req, res) => {
    console.log('que te paso?')
    try {
        const { id } = req.params;
        const provider = await Provider.findByIdAndUpdate(id, req.body)
        res.status(200).send(provider)
    } catch (error) {
        res.status(500).send(error)
    }
}
/*Exporting the methods*/
module.exports = {
    save,
    getAll,
    getById,
    deleteOne,
    update
}

