'use strict';
import MY_Control from '../../core/MY_Control';

module.exports = class Home extends MY_Control{
    constructor(req,res,next){
        super();

        return res.render('admin/index');
    }
}