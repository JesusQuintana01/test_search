/*Configuring express router*/

'use strict'
//importing essential libraries
const express = require('express');
const { LISTENING_SERVER_PORT } = require('dotenv').config().parsed;
const body_parser = require('body-parser');
const provider_routes = require('../controller/provider/provider.routes');
const speciality_routes = require('../controller/speciality/speciality.routes');

//Creating a express object.
const router = express();

//Usgin body_parser to parser incoming request.
router.use(body_parser.urlencoded({ extended: false }));
router.use(body_parser.json());

//Setting response headers.
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow', 'GET,POST,OPTIONS,PUT,DELETE');
    next();
})

//this function puts listening the server
const turnOnServer = new Promise((resolve, reject) => {
    router.listen(LISTENING_SERVER_PORT, (error) => {
        if (!error) {
            resolve(true)
        } else {
            reject(false);
        }
    });
})
router.use('/providers', provider_routes);
router.use('/specialities', speciality_routes);

module.exports = turnOnServer;

