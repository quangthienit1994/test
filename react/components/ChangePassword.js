'use strict';
import React, {Component} from 'react';

export default class ChangePassword extends Component{
    constructor(props){
        super(props);
        this.state = {
            old: "",
            newpass: "",
            newpass2: "",
            bool : false
        }
    }
    render(){
        const {userID} = this.props;
        const {bool} = this.state;
        if(userID == null)
            return res;
        let chane;
        if(bool == true){
            chane = (
                <tbody>
                    <tr><td>Old Password</td><td><input type="text" value={this.state.old} onChange={ (e) => this.setState({old: e.target.value})} /></td></tr>
                    <tr><td>New Password</td><td><input type="text" value={this.state.newpass} onChange={ (e) => this.setState({newpass: e.target.value})} /></td></tr>
                    <tr><td>Confirm Password</td><td><input type="text" value={this.state.newpass2} onChange={ (e) => this.setState({newpass2: e.target.value})} /></td></tr>
                    <tr><td><button onClick={ () => this.setState({bool: !bool})} className="btn btn-deafult btn-long">Cancel</button></td><td><button className="btn btn-info btn-long">Save</button></td></tr>
                </tbody>
            )
        }else{
            chane =  <tbody><tr><td colSpan="2"><button onClick={ () => this.setState({bool: !bool})} className="btn btn-deafult btn-long">Chage Password</button></td></tr></tbody>;
        }
        return chane;
    }
}