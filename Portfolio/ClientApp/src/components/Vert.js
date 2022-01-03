import React, { Component } from 'react';

export class Vert extends Component {
    static displayName = Vert.name;

    constructor(props) {
        super(props);
    }

    render() {
        var style = { lineHeight: this.props.height ?? 5 }
        return (
            <p style={style}>ㅤ</p>
        );
    }
}
