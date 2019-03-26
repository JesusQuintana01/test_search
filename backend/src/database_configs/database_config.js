/*Database conection.*/
'use strict'
/*importing essential libraries*/
const mongoose = require('mongoose');
/*getting information to connect wiht database and the listening port of server*/
const { DB_NAME, DB_USER, DB_PASSWORD } = require('dotenv').config().parsed;
/*creating conection to mongo database in mlab.com*/
const connectDataBase = new Promise((resolve, reject) => {
    mongoose.connect(
        `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_NAME}`,
        { useNewUrlParser: true, useFindAndModify: false },
        (error) => {
            if (!error) {
                resolve(true)
            } else {
                reject(false);
            }
        })
})

module.exports = connectDataBase;