'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
const DATA = [
    { path: "/admin/javascript", text: "Dashboard", child: [] },
    { path: "/admin/css", text: "Guest", child: [] },
    { path: "/admin/users", text: "Users", child: [
        { path: "/admin/javascript", text: "Add", child: [] }
        ]
    },
    { path: "/admin/javascript", text: "Calendar", child: [] },
    { path: "/admin/javascript", text: "Price Index", child: [] },
    { path: "/admin/javascript", text: "Setting", child: [] }
]

export default class MenuAdmin extends Component{
    constructor(props){
        super(props);
        this.state = {
            menustatus: "fadeOut"
        }
        $(document).ready(function (){
            $('li').hover(function (){
                $(this).addClass("active");
            }, function(){
                $(this).removeClass("active");
            });
        })
    }
    render(){
        return(
            <div className="menu-primary">
                <div className="control-menu hiden">
                    <label><input type="checkbox" onChange={this._showMenu.bind(this)} /></label>
                </div>
                <div className="primary-container">
                    <div className="overlight"></div>
                    <div className="primary-wraper">
                        <div className="logo-admin">
                        </div>
                        <div className={`primary-menu ${this.state.menustatus}`}>
                            <ul>
                                {__childrenSubmenu(DATA)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    _showMenu(event){
        if(event.target.checked){
            this.setState({menustatus: "fadeIn animated"});
        }else{
            this.setState({menustatus: "fadeOut animated"});
        }
    }
}
/** 
 * 
 */

function __childrenSubmenu(data){
        return data.map(function (node,i){
            let k;
            if(node.child != null){
                k = <ul className="submenu">{__childrenSubmenu(node.child)}</ul>
            }
            return (
                <li key={i}>
                    <Link to={node.path}>{node.text}</Link>
                    {k}
                </li>
            );
        });
    }