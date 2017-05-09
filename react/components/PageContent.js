'use strict';
import React, {Component} from 'react';
import {Link, Redirect, Switch} from 'react-router-dom';
import {Route} from 'react-router';

import User from './User';
import EditUser from './EditUser';
export default class MenuAdmin extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="page-content">
                <Redirect from="/admin" to="/admin" /> 
                <Switch>
                    <Route path="/admin/html" component={() => (<p>HTML</p>)} />
                    <Route path="/admin/css" component={() => (<p>CSS</p>)} />
                    <Route path="/admin/javascript" component={() => (<p>JAVS</p>)} />
                    <Route path="/admin/users" component={User} />
                    <Route path="/admin/user/edit/:id" component={EditUser} />
                </Switch>
            </div>
        );
    }
}