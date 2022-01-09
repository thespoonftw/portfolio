import React, { Component } from 'react';

export class Imgur extends Component {
    static displayName = Imgur.name;

    render() {
        var src = "https://i.imgur.com/" + this.props.code;
        return (
            <div className="col-sm">
                <br></br>
                <img 
                    src={src} 
                    className="instagramImage" 
                    alt="alt text yet to be added"
                    />
            </div>
        );
    }
}
