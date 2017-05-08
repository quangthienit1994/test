'use strict';
module.exports = {
    MY_Control: require('./core/MY_Control'),
    MY_Model: require('./core/MY_Model'),
    SQL: require('./database/MySQL'),
    File: require('./helper/File'),
    Control: {
        Home: require('./modules/controllers/Home'),
        Admin: require('./modules/controllers/Admin')
    }
}