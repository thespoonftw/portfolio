import React, { Component } from 'react';
import { Vert } from './Vert';

export class Photos extends Component {
  static displayName = Photos.name;

  render () {
    return (
      <div>
          <Vert height='3'></Vert> 
        <h1>Photos</h1>
        <p>Page work in progress. Try another page.</p>
      </div>
    );
  }
}
