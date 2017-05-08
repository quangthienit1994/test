'use strict';
import React, {Component} from 'react';

export default class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            io: this.props.io,
            users: [
                {id: 1, account: "Admin", name: "Nguyen thien Quang", status: true, register: new Date().toDateString() }
            ]
        }

        this._Delete = this._Delete.bind(this);
        this._Edit = this._Edit.bind(this);
        this._View = this._View.bind(this);
    }
    render(){
        return(
            <div className="padding-sm">
                <div className="row small">
                    <div className="col-xs-12 col-sm-6 col-md-8">
                        <table className="table table-hover table-striped border-white">
                            <thead>
                                <tr>
                                    <td><input type="checkbox" onClick={ () => {} } className="btn-checkbox"  /></td>
                                    <td>Account</td>
                                    <td>Full name</td>
                                    <td>Account Status</td>
                                    <td>Logged</td>
                                    <td>Delete</td>
                                    <td>Edit</td>
                                    <td>Register</td>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.users.map(function (node, i){
                                    let status = <i className="fa fa-check-square"></i>
                                    const asus = node.status == true ? "Active" : "Disabled";
                                    return (
                                        <tr key={i} >
                                            <td><input type="checkbox" onClick={ () => {} } className="btn-checkbox"  /></td>
                                            <td  className="btnpointer" onClick={ this._View(node.id) }>{node.account}</td>
                                            <td>{node.name}</td>
                                            <td>{asus}</td>
                                            <td>{status}</td>
                                            <td><a href="#" className="txtdelete" onClick={ this._Delete(node.id) } >Delete</a></td>
                                            <td><a href="#" className="txtedit" onClick={ this._Edit(node.id) } >Edit</a></td>
                                            <td>{node.register}</td>
                                        </tr>
                                    );
                                }.bind(this))
                            }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        //this._getUser();
    }
    _Delete(id){

    }
    _Edit(id){

    }
    _View(id){

    }
    _getUser(){
        ajax({
            url: "",
            typeText: "json",
            type: "POST"
        }).then(function (data){
            if(data != null){
                this.setState({users: JSON.parse(data)})
            }
        }, function(err){
            
        });
    }
}