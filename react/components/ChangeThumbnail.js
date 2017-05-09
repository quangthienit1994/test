'use strict';
import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
export default class ChangeThumbnail extends Component{
    constructor(props){
        super(props);
        this.state = {
            url: this.props.url
        }
    }
    render(){
        return (
            <div className="relative">
                <img className="img-responsive" src={this.state.url} alt={this.props.alt} />
                <div className="area-drop">
                    <Dropzone onDrop={(files) => this.onDrop(files)}>
                        <div>Try dropping some files here, or click to select files to upload.</div>
                    </Dropzone>
                </div>
            </div>
        );
    }
    onDrop(acceptedFiles, rejectedFiles) {
       this.setState({url: acceptedFiles[0].preview});
    }
}