'use strict'
/*this component in only to do a conection database and turn on the serve.
-importing essential libraries*/
const connectDataBase = require('./src/database_configs/database_config');
const turnOnServer = require('./src/configs_routes/router')

/*Connecting with database */

connectDataBase.then((database_check) => {
    if (database_check) {
        console.log('Database has been connected')
        /*Turning on the server*/
        turnOnServer.then((server_check) => {
            if (server_check) console.log('Server is listening')
        }).catch((server_check) => {
            if (!server_check) console.log('Server error')
        })
    }
}).catch((database_check) => {
    if (!database_check) console.log('ups!!');
})

