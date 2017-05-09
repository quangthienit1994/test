'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UserContent from './UserContent';
import Pagination from './Pagination';
export default class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            io: this.props.io,
            users: [
                {id: 1, account: "Admin", name: "Nguyen thien Quang", status: true, register: '03/02/2016', thumbnail: '/image/user/admin.pns', dateofbirth: '25/09/1994', loggedtime: '05:31:69 9/3/2017' }
            ],
            showinfo: ""
        }

        this._Delete = this._Delete.bind(this);
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
                                            <td><a href="#" onClick={ this._Delete(node.id) } >Delete</a></td>
                                            <td><Link className="txtedit" to={`/admin/user/edit/${node.id}`}>Edit</Link></td>
                                            <td>{node.register}</td>
                                        </tr>
                                    );
                                }.bind(this))
                            }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="8" className="text-right"><Pagination url="/admin/users"  total="20" page="2" show="10" /></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        {this.state.showinfo}
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        //this._getUser();
        this.setState({showinfo: <UserContent user={this.state.users[0]} />});
    }
    _Delete(id){

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