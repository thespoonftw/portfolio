import React, { Component } from 'react';

export class Imgur extends Component {
    static displayName = Imgur.name;

    

    render() {
        //const containerStyle = { width: "50%", paddingBottom: "50%", overflow: "hidden", position: "relative", background: "#000" };
        //const imageStyle = { position: "absolute", width: "100%" }
        const containerStyle = this.props.square ?
            { width: "100%", paddingBottom: "100%", overflow: "hidden", position: "relative", background: "#fff" } :
            { width: "100%" };
        const imageStyle = this.props.square ?
            { position: "absolute", top: "50%", left: "50%", maxWidth: "100%", maxHeight: "100%", transform: "translateX(-50%) translateY(-50%)" }
            : { width: "100%"};
        
        return (
            <div className="col-md">
                <br></br>
                <div style={containerStyle}>
                    <img onClick={this.props.onClick} style={imageStyle} src={this.props.url} alt="alt text yet to be added"/>
                </div>                
            </div>
        );
    }
}
