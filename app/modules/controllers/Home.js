'use strict';

module.exports = class Home{
    constructor(req,res,next){
        res.send("Home Module")
    }
}