import React, { Component } from 'react';
import { Vert } from './Vert';

export class Travel extends Component {
  static displayName = Travel.name;

  render () {
    return (
      <div>
          <Vert height='3'></Vert> 
        <h1>Travel</h1>
        <p>Page work in progress. Try another page.</p>
      </div>
    );
  }
}
