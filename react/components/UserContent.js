'use strict';
import React, {Component} from 'react';

export default class UserContent extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const age = this.props.user.dateofbirth;
        return(
            <div className="user-wrapper bg-white">
                 <div className="user-thumbnail">
                    <img className="img-responsive" src="/image/user/admin.png" alt="Nguyễn thiên quang" />
                </div>
                <div className="user-content padding-xs">
                    <h3>{this.props.user.name}</h3>
                    <p><strong>Account:</strong> {this.props.user.account}</p>
                    <p><strong>Age:</strong> {age}</p>
                    <p><strong>Date Register:</strong> {this.props.user.register}</p>
                    <p><strong>Logged Time:</strong> {this.props.user.loggedtime}</p>
                </div>
            </div>
        );
    }
}