'use strict';
import React, {Component} from 'react';
import $ from 'jquery';
export default class ChangePassword extends Component{
    constructor(props){
        super(props);
        this.state = {
            old: "",
            newpass: "",
            newpass2: ""
        }
    }
    render(){
        const {userID} = this.props;
        if(userID == null)
            return res;
        return (
            <div className="area-changepassword">
                <div>
                    <table className="table table-hover small">
                        <thead>
                            <tr><td colSpan="2"><h4>Please change your password</h4></td></tr>
                        </thead>
                        <tbody>
                            <tr><td>Old Password</td><td><input type="password" value={this.state.old} onChange={ (e) => this.setState({old: e.target.value})} /></td></tr>
                            <tr><td>New Password</td><td><input type="password" value={this.state.newpass} onChange={ (e) => this.setState({newpass: e.target.value})} /></td></tr>
                            <tr><td>Confirm Password</td><td><input type="password" value={this.state.newpass2} onChange={ (e) => this.setState({newpass2: e.target.value})} /></td></tr>
                        </tbody>
                        <tfoot>
                            <tr><td><button onClick={ () => this.props.bool()} className="btn btn-deafult btn-long">Cancel</button></td><td><button className="btn btn-info btn-long">Save</button></td></tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
    componentDidMount() {  
        this.viewPass();
    }
    viewPass(){
        $(document).on('hover', 'input[type="password"]', function (){
            if($(this).attr("type") == "password"){
                $(this).attr("type", "text");
            }else{
                $(this).attr("type", "password");
            }
        });
    }
}