import React, { Component } from 'react';
import { Vert } from '../components/Vert';

export class Travel extends Component {
  static displayName = Travel.name;

  render () {
    return (
      <div>
        <Vert height='3'></Vert> 
        <h1>Travel</h1>
        <Vert height='3'></Vert>
        <p>Page work in progress. Try another page.</p>
      </div>
    );
  }
}
