'use strict';
import React, {Component} from 'react';

import MenuAdmin from '../components/MenuAdmin';
import PageContent from '../components/PageContent';
import Logged from '../components/Logged';

export default class Admin extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="page-admin">
                <header className="clearfix full-width">
                    <div className="pull-left">
                    </div>
                    <div className="pull-right">
                        <Logged />
                    </div>
                </header>
                <MenuAdmin />
                <PageContent />
            </div>
        );
    }
}