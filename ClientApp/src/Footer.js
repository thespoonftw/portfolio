import React, { Component } from 'react';
import { Vert } from './components/Vert';

export class Footer extends Component {
  static displayName = Footer.name;

  render() {
    var style = { backgroundColor: "#cccccc", marginBottom: "-16px" };

    return (
      <div style={style}>
        <Vert height='3'></Vert>
        <center>          
          <p>Contact: <b>mikewright92@gmail.com</b></p>
        </center>
        <Vert height='3'></Vert>
      </div>
    );
  }
}
