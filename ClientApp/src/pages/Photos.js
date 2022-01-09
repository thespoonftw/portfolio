import React, { Component } from 'react';
import { Vert } from '../components/Vert';

export class Photos extends Component {
  static displayName = Photos.name;

  render () {
    return (
      <div>
        <Vert height='3'></Vert> 
        <h1>Photos</h1>
        <Vert height='3'></Vert>
        
        <p>Page work in progress. Try another page.</p>
      </div>
    );
  }
}
