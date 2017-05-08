'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
export default class Logged extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.__toggle_();
    }
    render(){
        return(
            <ul className="tool-logged menu inline">
                <li><a href="#" ><i className="fa fa-flag-checkered"></i> Hi!</a></li>
                <li><a href="#logout" onClick={this.__handleLogout.bind(this)} ><i className="fa fa-sign-out"></i> Sign Out</a></li>
                <li><a href="#" className="toogle-submenu" ><i className="fa fa-angle-double-down"></i></a>
                    <ul className="submenu">
                        <li><a href="">Profile</a></li>
                        <li><a href="">Pullhulk</a></li>
                    </ul>
                </li>
            </ul>
        );
    }
    __handleLogout(){
        ajax({

        }).then(function (data){

        }, function (error){

        });
    }
    __toggle_(){
        $(document).on('click', '.toogle-submenu', function (event){
            if( $(this).hasClass("open") ){
                $(this).removeClass("open");
            }else{
                $(this).addClass("open");
            }
        });
    }
}
