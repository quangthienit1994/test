'use strict';
const Libs = require('./Libs');
module.exports = function(app){
    app.get('/', (req,res,next) => {
        return new Libs.Control.Home(req,res,next);
    });
    app.get('/admin/*', (req,res,next) => {
        return new Libs.Control.Admin(req,res,next);
    });
    app.get('/admin', (req,res,next) => {
        return new Libs.Control.Admin(req,res,next);
    });
}