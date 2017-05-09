'use strict';
import React, {Component} from 'react';
import ChangePassword from './ChangePassword';
import ChangeThumbnail from './ChangeThumbnail';

export default class EditUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: {id: 1, account: "Admin", name: "Nguyen thien Quang", status: true, register: '03/02/2016', thumbnail: '/image/user/admin.pns', dateofbirth: '25/09/1994', loggedtime: '05:31:69 9/3/2017' },
            password: false,
            bool : false
        }
    }
    render(){
        const {user, bool} = this.state;
        const changePass = this.__changePassword();
        if(user != null){
            return(
            <div className="edit-user-page padding-xs">
                <div className="header">
                    <div className="clearfix full-width">
                        <div className="pull-left">
                            <h3>{user.account}</h3>
                            <p>Created at {user.register}</p>
                        </div>
                        <div className="pull-right">
                            <button className="btn btn-primary btn-long">Save</button>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-8">
                            <table className="table table-striped">
                                <tbody>
                                    <tr><td><label>Account</label></td><td><input className="form-control input-sm" type="text" value={user.account} disabled="true" /></td></tr>
                                    <tr><td><label>Full Name</label></td><td><input className="form-control input-sm" type="text" value={user.name} onChange={ (e) => { this.state.user.name = e.target.value; this.setState(this.state) } } /></td></tr>
                                    <tr><td><label>Date of Bird</label></td><td><input className="form-control input-sm" type="text" value={user.dateofbirth} /></td></tr>
                                    <tr><td colSpan="2"><button onClick={ () => this.setState({bool: !bool})} className="btn btn-deafult btn-long">Chage Password</button></td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <ChangeThumbnail url="/image/user/admin.png" userid={this.state.user.id} alt="Nguyễn thiên quang" />
                        </div>
                    </div>
                </div>
                {changePass}
            </div>
            );
        }else{
            return(
                <p>Nothing data</p>
            );
        }
    }
    __changePassword(){
        const {bool} = this.state;
        if(bool == true){
            return <div className="animated fadeIn"><ChangePassword bool={ () => this.setState({bool: !bool})} userID={this.state.user.id} /></div>;
        }
    }
    componentWillMount() {
        this.getUserByID();
    }
    getUserByID(){
        const {id} = this.props.match.params;
        if(id == null || !isNumber(id))
            return;
        ajax({

        }).then(function (data){

        }, function (err){

        }).catch(function (e){
            
        });
    }
}